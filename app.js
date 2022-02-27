const express = require("express");

const db = require("./data/database");
const quoteRoutes = require("./router/quotes.routes");

const app = express();

app.use("/quote", quoteRoutes);

app.use((error, req, res, next) => {
    res.status(500).json({
        error: "Something went wrong on the server",
    });
});

db.initDb()
    .then(() => {
        app.listen(3000);
    })
    .catch((err) => {
        console.error("Connecting to the database failed!");
        console.error(err);
    });
