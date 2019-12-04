var express = require('express');
var app = express();
var Lport = 1000;
var Hport = process.env.PORT;

app.use(express.static('game'));
app.get('/' , function(req, res){
    res.sendFile(__dirname +'/game/index.html');
})


var server = app.listen(Hport , function(){
    console.log("Server running at " + Hport);
})
