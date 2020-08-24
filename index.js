const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

app.get("/test", (req, res) => {
  return res.json({ message: "Test for deploy on Heroku!" });
});

app.listen(3333, () => {
  console.log("Backend started!");
});