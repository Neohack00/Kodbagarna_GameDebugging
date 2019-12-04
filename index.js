var express = require('express');
var app = express();
var Lport = 1000;
var Hport = process.env.PORT;

app.get('/' , function(req, res){
    res.sendFile(__dirname +'/game/index.html');
})
app.use(express.static('game'));

var server = app.listen(Hport , function(){
    console.log("Server running at " + Hport);
})
