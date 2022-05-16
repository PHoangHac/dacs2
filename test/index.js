const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world !");
});

app.listen(5555, () => {
  console.log(`server run port : 5555`);
});
