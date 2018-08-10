var express = require('express');
var app = express();


app.get('/', function (req, res){
    res.send('hello world');
});


app.listen(5000, function (req, res) {
    console.log("Subiu a bagaça");
});