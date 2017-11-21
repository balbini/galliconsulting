const express = require("express");
const app = express();


// const request = require("request-promise");

app.set("view engine", "ejs");


const bodyParser = require ("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.static("./assets"));
