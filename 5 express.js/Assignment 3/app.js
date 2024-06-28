const express = require("express");
const path = require("path");
const rootDir = require("./util/path");

const app = express();

const routes = require("./routes/routes");

app.use(express.static(path.join(rootDir, "public")));

app.use(routes);

app.listen(3000);
