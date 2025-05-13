import express from "express";
import cors from "cors";
import { config } from "dotenv";
import dbConnect from "./db/dbConnect.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";

config("./.env");

const app = express();

//middlewares
app.use(cors(
  {
  origin: 'https://expense-tracker-bay-psi.vercel.app',  // your frontend domain
  credentials: true,  // allow credentials (cookies, auth headers)
}
));

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;


//routers
app.use("/users", userRouter);

//PRODUCTION
app.listen(PORT, () => {
  console.log(`App is Listening on PORT ${PORT}`);
  dbConnect();
});

