let express = require('express');
let app = express();

console.log('hello world!')

app.get('/',function(req,res){
    res.send('hello express')
})

































 module.exports = app;
