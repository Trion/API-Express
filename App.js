const express = require("express");
var wifi = require("./wifi");
const config = require("./asscescontrol");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use("/wifi", wifi);
var server = app.listen(3000, function () {
    console.log("ExpressJS server running on port 3000");
});