import mongoose from "mongoose";

export const dbConnect = async() => {
    mongoose.connect('mongodb://localhost:27017/coursesDB')
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    });
}