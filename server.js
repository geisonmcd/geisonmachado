var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));

const port = 5000;
app.listen(port, function (req, res) {
    console.log("Subiu a bagaça na porta " + port);
});