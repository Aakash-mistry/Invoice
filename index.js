// ? Importing packages
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

// ? Importing files
const app = express();
require("./config/database").dataConnection();
const invoiceRoute = require("./routes/invoice");

// ? Middleware and other inits
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ? Route setup
app.use("/", invoiceRoute);

// ? Server setups
app.listen(process.env.PORT || 8000, (err) => {
     if (err) console.log(err);
     else console.log("server is up and running");
});
