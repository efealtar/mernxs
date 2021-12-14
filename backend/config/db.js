const mongoose = require("mongoose");

const MONGODB = process.env.MONGODB;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
