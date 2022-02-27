const express = require("express");

const app = express();

const quoteRoutes = require("./routes/quotes.routes");

app.use(quoteRoutes);

app.listen(3000);
