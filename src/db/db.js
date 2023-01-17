const mongoose = require("mongoose");
require("dotenv").config();

const db = mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("connection successfully");
  })
  .catch((error) => {
    console.log("error", error);
  });

module.exports = db;
