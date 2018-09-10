require('dotenv').config();
const mongoose = require("mongoose");

const dbURI = process.env.DB_URI;

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

require("../models/databaseModels/User");