const mongoose = require("mongoose");

exports.mongodbConnection = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connection successful");
  } catch (error) {
    console.log(error);
  }
};
