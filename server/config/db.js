import  mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://web:srab1234@cluster0.omc32.mongodb.net/foodweb').then(()=>console.log("DB connected"));
}