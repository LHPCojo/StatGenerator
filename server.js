const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
    res.json({ message: "Hello there."});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("App is running on port + " + PORT);
});
