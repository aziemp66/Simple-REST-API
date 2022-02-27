const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the API",
    });
});

app.listen(3000);
