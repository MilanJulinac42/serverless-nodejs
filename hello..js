const serverless = require("serverless-http");
const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
    res.status(200).send("Hello, world!");
});

module.exports.handler = serverless(app);
