import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
import cors from "cors";
// import ServerlessHttp from 'serverless-http';
import http from "http";
import dotenv from "dotenv";
import { Server as socketIO } from "socket.io";
dotenv.config();
const { MONGO_PROD } = process.env;
const app = express();
const server = http.createServer(app);
const io = new socketIO(server);

app.get("/", (req, res) => {
  res.json({ ok: true });
});
app.use(express.json());
app.use(cors("*"));

mongoose
  .connect(MONGO_PROD)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/", router);
// app.listen(3000,()=>{
//     console.log("listening in port 3000")
// })

io.on("connection", (socket) => {
  console.log("user is connected");
});
server.listen(3000, () => {
  console.log("listening in server 3000");
});
