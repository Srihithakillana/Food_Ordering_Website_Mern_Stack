import mongoose from 'mongoose'

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://Srihitha:1234512@cluster0.atm3nky.mongodb.net/food-del').then(()=>console.log('DB connected'));
}
