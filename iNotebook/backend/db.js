const mongoose = require("mongoose");

const mongoURI =
  "mongodb://0.0.0.0:27017/inotebook?readPreference=primary&directConnection=true&ssl=false";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
