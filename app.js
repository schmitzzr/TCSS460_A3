// Assignment 3 REST Service
// Zach Schmitz
// import required modules
var express = require("express");
var app = express();
const cors = require('cors');
app.use(cors());

// landing page
app.get('/', function (req, res) {
    res.status(200);
    res.send("<h1>this REST service will convert numbers to and from Binary/Hexadecimal</h1>");
    console.log("a request has been processed in / (root)");
});

// converting decimal numbers to binary
app.get("/toBinary/:num", function(req, res) {
    const num = parseInt(req.params.num);
    if (num === undefined || isNaN(num) || num < 0) {
        res.status(400);
        res.json({error: "bad request"});
        return ;
    }
    const result = num.toString(2);
    console.log("/toBinary/num   request is made...");
    res.json({"result" : result});
});

// converting binary numbers to decimal
app.get("/fromBinary/:num", function(req, res) {
    var format = /^[0-1]+$/;    // format for a binary string
    const num = req.params.num;
    if (num === undefined || isNaN(num) || !format.test(num)) { // check if number is valid
        res.status(400);
        res.json({error: "bad request"});
        return ;
    }
    const result = parseInt(num, 2);
    console.log("/fromBinary/num   request is made...");
    res.json({"result" : result});
});

// converting decimal numbers to hexadecimal
app.get("/toHex/:num", function(req, res) {
    const num = parseInt(req.params.num);
    if (num === undefined || isNaN(num) || num < 0) { // check if number is valid
        res.status(400);
        res.json({error: "bad request"});
        return ;
    }
    const result = num.toString(16); 
    console.log("/toHex/num   request is made...");
    res.json({"result" : result});
});

// converting hexadecimal numbers to decimal
app.get("/fromHex/:num", function(req, res) {
    var format = /^[0-9a-fA-F]+$/;  // format for a hexadecimal string
    const num = req.params.num;
    if (num === undefined || !format.test(num)) {  // check if format is valid
        res.status(400);
        res.json({error: "bad request"});
        return ;
    }
    const result = parseInt(num, 16);
    console.log("/fromHex/num   request is made...");
    res.json({"result" : result});
});


app.listen(3000, function () {
    console.log("API version 1.0.0 is running on port 3000");
});