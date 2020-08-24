const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

app.get("/test", (req, res) => {
  return res.json({ message: "Test for deploy on Heroku!" });
});

app.listen(process.env.PORT || 3333, () => {
  console.log("Backend started!");
});
