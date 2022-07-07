const mongoose = require('mongoose');

const conn = mongoose
  .connect(process.env.ATLAS_URI)
  .then((db) => {
    console.log("Connected to the Database");
    return db;
  })
  .catch((err) => {
    console.log(`Connection error ${err}`);
  });

module.exports = conn;