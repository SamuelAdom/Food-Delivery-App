import mongoose from "mongoose";

//function 
const connectDB= async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{})
        console.log("Database connected") 
    }
    catch(error){
        console.log("Error connecting database", error.message)

    }


}
export default connectDB