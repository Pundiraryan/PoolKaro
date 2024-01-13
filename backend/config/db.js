import mongoose from "mongoose";
const connectToMongo=async ()=>{
  try {
    const connectionstatus=await mongoose.connect(process.env.URI,{
      dbName:process.env.DB_NAME
    });
    if(connectionstatus){
      console.log('db connected');
    }else{
      console.log('connection failed');
    }
  } catch (error) {
    console.log(error);
  }
}
export default connectToMongo;

