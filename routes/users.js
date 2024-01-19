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
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.put("/", (req, res) => {
  res.send("Create User");
});

// the id will be replaced by any value that is entered from the front-end
// we can access that id using the params keyword
router.get("/:id", (req, res) => {
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

export default router;
