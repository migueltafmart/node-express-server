const utils = require("./utils");
const router = require('./modules/router');
require("dotenv").config();
const express = require("express");
const app = express();
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8080;

//Morgan 🍄 · Requests information
app.use(utils.morgan);

//Body parser 📬 · Brings body from frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router 🚏 
app.use(router)

app.listen(PORT, HOST, () => console.log(process,`Server running at http://${HOST}:${PORT}`));
