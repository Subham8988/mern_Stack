import mongoose from "mongoose";
// import colors from "colors";
mongoose.set('strictQuery',true)
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/eccomerce');
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.green);
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`)
  }
};

export default connectDB;
