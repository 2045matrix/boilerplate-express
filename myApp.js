let express = require('express');
let app = express();

console.log('hello world!')

// app.get('/',function(req,res){
//     res.send('hello express')
// })
app.use(express.static(__dirname+'/public/'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})


app.get('/json',(req,res)=>{
//     res.send( JSON.stringify({'message':'hello json'}).substr() )
 let obj = {'message':'hi json'}
res.send(obj.message)


})






























 module.exports = app;
