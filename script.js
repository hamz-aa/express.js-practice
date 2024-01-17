import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  // res.send("hi there");
  // res.sendStatus(200);
  // res.status(200).send("hi there");
  // res.json({ message: "success" });
  // res.download("script.js");

  res.render("/views/index.html");
});

app.listen(port, () => console.log(`server started at port ${port}`));
