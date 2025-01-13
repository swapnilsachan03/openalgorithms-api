import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import authRoutes from "@routes/auth_routes";
import userRoutes from "@routes/user_routes";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use(userRoutes);

const port = process.env.PORT || 4000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log("Server running on port " + port);
});
