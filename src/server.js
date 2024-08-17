import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import sessionRoutes from "./routes/sesion.routes.js";
import userRoutes from "./routes/user.routes.js";
import { authenticate } from "./middlewares/auth.middleware.js";
import routes from "./routes/index.js";
import { config } from "./config/config.js";
import { initializePassport } from "./config/passport.config.js";

const app = express();
const PORT = 5000;


//Express configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(morgan("dev"));

//Passport config
initializePassport();
app.use(passport.initialize());

//Mongoose configuration
mongoose.connect(config.MONGO_URI)
.then(()=>{
    console.log("conectado a MongoDB");
})
.catch((error)=> {
    console.log(error);
});

//Router configuration
app.use("/api", routes);
app.use("/api/sesion", sessionRoutes);
app.use("/api/users", authenticate, userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});