const express = require("express");
const cors = require("cors");
const db = require("./src/db/db.js");
const router = require("./src/routes/index");

const PORT = 4000 || process.env.PORT;
const App = express();

db.then(() => {
  console.log("started");
}).catch((error) => console.log(error));

// default json format middleware
App.use(express.json());
App.use(cors());
App.use("/api", router);

App.get("/api", (req, res) =>
  res.status(200).json({ message: "Server started" })
);

App.listen(PORT, () => {
  console.log("start started");
});
