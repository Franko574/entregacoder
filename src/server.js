import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import sessionRoutes from "./routes/sesion.routes.js";
import userRoutes from "./routes/user.routes.js";
import { authenticate } from "./middlewares/auth.middleware.js";

const app = express();
const PORT = 5000;

//Express configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

//Mongoose configuration
mongoose.connect("mongodb://localhost:27017/entregacoder")
.then(()=>{
    console.log("conectado a MongoDB");
})
.catch((error)=> {
    console.log(error);
});

//Router configuration
app.use("/api/sesion", sessionRoutes);
app.use("/api/users", authenticate, userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});