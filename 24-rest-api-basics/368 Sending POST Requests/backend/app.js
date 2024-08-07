const bodyParser = require("body-parser");
const express = require("express");

const feedRoutes = require("./routes/feed");

const app = express();

app.use(bodyParser.json());

app.use("/feed", feedRoutes);

app.listen(8080);
