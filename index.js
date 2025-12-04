const express = require('express');
const app = express();

const authRoutes = require("./routes/auth");

app.use("/", authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log("Server is listening at port", port);
})