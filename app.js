import dotenv from 'dotenv';
dotenv.config();
import express from"express"
import authRoute from "./routes/authRoutes.js";
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authRoute)
console.log(process.env.DATABASE_URL)
app.listen(7000,()=>{
    console.log("sever is running at http://localhost:7000")
})