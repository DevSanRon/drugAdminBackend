const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const router = require("./src/routes/index");
var bodyParser = require("body-parser");
const { responseData } = require("./src/helpers/response");
const statusCode = require("./src/helpers/statuscode");
require("dotenv").config();

let port = process.env.PORT || 3002;
app.set("port", port);
app.use(cors());

//for CORS
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");
  req.header("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect(process.env.Databaseconnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(express.json());
app.get("/monty", (req, res) => {
  return responseData({
    res,
    statusCode: statusCode.SUCCESS,
    success: 1,
    message: "Checkkkkkkk",
  });
  // res.send("API CALLING");
});
app.use("/api", router);
app.listen(port, () => {
  console.log("Port Listening at ", port);
});
