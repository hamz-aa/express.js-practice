import express from "express";
import userRouter from "./routes/users.js";

const app = express();
const port = 8080;

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

// we can use routes from our route folder using the middleware below
app.use("/users", userRouter);

app.listen(port, () => console.log(`server started at port ${port}`));
