const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("./routes/userRoute");

app.use(cors());
app.use(express.json()); // to parse JSON request bodies
app.use("/api/users", userRoutes); // prefix all user routes

module.exports = app;