const mongoose = require("mongoose");

exports.mongodbConnection = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("mongodb connection successful");
  } catch (error) {
    console.log(error);
  }
};
