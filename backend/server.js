const express = require("express");
const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const userRoutes = require("./routes/userRoutes");
const { chats } = require("./data/data");
const { connect } = require("mongoose");
const connectDB = require("./config/db");
const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // to accept json

const colors = require("colors");

app.get("/", (req, res) => {
  res.send("API is running Successfully");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server Started on PORT ${PORT}`.yellow.bold));
