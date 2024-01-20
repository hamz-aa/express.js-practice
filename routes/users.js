import express from "express";

// we can create a router that is a mini application similar to our
// app in script.js file but is independent to our router in script.js

const router = express.Router();

// router.get("/users", (req, res) => {
//   res.send("User List");
// });

// router.get("/users/new", (req, res) => {
//   res.send("User New Form");
// });

// since all of routes here start with /users, we can remove /users
// from the beginning of every route because our router object will
// suppose it on its own

router.get("/", (req, res) => {
  console.log(req.query.name); // we can access query elements from url in this manner
  res.send("User List");
});

router.get("/new", (req, res) => {
  // res.send("User New Form");
  res.render("users/new", { firstName: "Test" }); // rendering a form
});

router.post("/", (req, res) => {
  const isValid = true;

  // res.send("Create User");

  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`); // redirecting to a new page
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
  // we put name=firstName in input in new.ejs so we can access it here but it
  // gives an error because express does not allow you to access body directly
  // instead you have to do it through middleware so we use urlencoded() middleware
  // in script.js
  // console.log(req.body.firstName);
});

// the id will be replaced by any value that is entered from the front-end
// we can access that id using the params keyword
router.get("/:id", (req, res) => {
  console.log(req.user); // printing user we get at line 67
  res.send(`Get User With ID : ${req.params.id}`);
});

// one important thing to remember is to keep the dynamic route at the bottom
// of your file since javascript parses code line by line and can cause issues

router.put("/:id", (req, res) => {
  res.send(`Update User With ID : ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Update User With ID : ${req.params.id}`);
});

// we used the get, put and delete method for the same route above
// this redundancy can be reduced by using the route() method which
// takes a single route and chains all the methods together as shown below

// router.route('/:id').get((req, res) => {
//     res.send(`Get User With ID : ${req.params.id}`);
//   }).put((req, res) => {
//     res.send(`Update User With ID : ${req.params.id}`);
//   }).delete((req, res) => {
//     res.send(`Update User With ID : ${req.params.id}`);
//   })

// a very useful function that runs whenever it founds a param that we
// specify in brackets. router.params is a type of middleware so if we don't
// use next(), the page will remain loading and other routes will not run
const users = [{ name: "Hamza" }, { name: "Ali" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id]; // we can create a random property in req called user and assign it a user
  next();
});

export default router;
