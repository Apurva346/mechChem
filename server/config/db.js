const mongoose = require('mongoose');
const path = require('path');

const connectDB = async () => {
  try {
    console.log("URI Check:", process.env.MONGO_URI); 
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Atlas Connected Successfully!");
  } catch (err) {
    console.error("❌ Connection Error: ", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;