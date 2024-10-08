import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/database.js";
dotenv.config({
    path: ".env"
})
import courseRouter from "./routers/course.route.js"

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

app.use("/api/v1/courses", courseRouter);

dbConnect();
app.listen(PORT, () => {
    console.log(`Server Runing on PORT: ${PORT}`);
});