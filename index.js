const express = require("express");
const port = 8000;
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Cool, It is running !</h1>");
});
app.get("/profile", function (req, res) {
  res.send("<h1>Cool, Profile is running !</h1>");
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in server", err);
  }
  console.log("Express is running ", port);
});
