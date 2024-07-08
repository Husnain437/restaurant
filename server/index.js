require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const menuRouters = require('./routes/menuR');
const mongoose = require("mongoose");

// database connection
const db = mongoose.connection
db.on('error', (err) => {
    console.log(err);
})
db.once('open', () => {
    console.log("Database connection established");
})

connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRouters)

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));