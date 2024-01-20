import express from "express";
import userRouter from "./routes/users.js";

const app = express();
const port = 8080;

// if we have static web pages unlike the one that we rendered below in app.get(),
// we can render these static web pages by using express.static() middleware
app.use(express.static("public"));

// this middleware is used to access information coming from forms
app.use(express.urlencoded({ extended: true }));

// this middleware is used to process json
app.use(express.json());

// setting up ejs as view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("hi there");
  // res.sendStatus(200);
  // res.status(200).send("hi there");
  // res.json({ message: "success" });
  // res.download("script.js");

  // rendering a view from views folder
  // we can pass data from server to our view by passing a second
  // argument of object to our render method
  res.render("index", { text: "Hamza" });
});

// we can have hundreds of route defined which can get the code messy
// a good way is to have a folder that contains all of our routes and
// then import it here in our main file
// so we are going to put the below routes in routes folder and use them here
// app.get("/users", (req, res) => {
//   res.send("User List");
// });

// app.get("/users/new", (req, res) => {
//   res.send("User New Form");
// });

// using the logger function we created as a middleware. This app.use() has
// to be above the app.use() at line 40 or else it will not work. middleware
// like this should be defined at the top of the page because it is used by
// everything code is executed from top to bottom
app.use(logger);

// we can use routes from our route folder using the middleware below
app.use("/users", userRouter);

// creating a middleware function
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// if we want a middleware to apply on a specific request only then we
// can pass it in as parameter just like in example below. we can pass it
// in as a parameter as many times as we want.
// app.get("/", logger, (req, res) => {
//   res.send('Hi There!')
// });

app.listen(port, () => console.log(`server started at port ${port}`));
