const express = require('express');
const app =express();

app.get('/', function(req,res){
    res.end('<h1>Hello World</h1>');
})

app.get('/xxx', function(req,res){
    res.end('<h1>Adults only</h1>');
})

app.get('/a*', function(req,res){
    res.end('<h1>Streber</h1>');
})

app.listen(3000, function() {
    console.log("Up and running");
})

