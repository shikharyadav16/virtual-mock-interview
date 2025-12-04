const express = require('express');
require("dotenv").config();
const app = express();

const authRoutes = require("./routes/auth");

app.use("/", authRoutes);

const port = process.env.PORT;
app.listen(port, ()=> {
    console.log("Server is listening at port", port);
})