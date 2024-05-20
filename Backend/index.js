const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

let SBData = null;

const dataBasePath = path.join(__dirname, "todoApplication.db");

const initializeDataBse = async () => {
  try {
    SBData = await open({
      filename: dataBasePath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (error) {
    console.log(`DB Error ${error.message}`);
    process.exit(1);
  }
};
initializeDataBse();

app.get("/get", async (request, response) => {
  const getData = `SELECT * FROM Persons`;
  const ResultData = await SBData.all(getData);
  //   console.log(ResultData);
  response.send(ResultData);
});

module.exports = app;
