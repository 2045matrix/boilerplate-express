require('dotenv').config()
let express = require('express');
let app = express();

let bodyParser =require('body-parser')
console.log('hello world!')

// app.get('/',function(req,res){
//     res.send('hello express')
// })

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname+'/public/'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
   
})
app.use((req,res,next)=>{
    console.log(req.method+ ' '+ req.path +' - '+ req.ip)
    next()
})
app.get('/user', function(req, res, next) {
    req.user = getTheUserSync();  // Hypothetical synchronous operation
    next();
  }, function(req, res) {
    res.send(req.user);
  });

app.get('/json2',(req,res)=>{
//     res.send( JSON.stringify({'message':'hello json'}).substr() )


 if (process.env.MESSAGE_STYLE) {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  }

var response = "Hello World".toUpperCase()

})

app.get('/json', (req, res) => {
    process.env.MESSAGE_STYLE === 'uppercase'
      ? res.json({ message: 'HELLO JSON' })
      : res.json({ message: 'Hello json' });
  });


  app.get('/now',function(req,res,next){
    req.time = new Date().toString()
    
    next()

  },
  (req,res)=>{
    res.json(req.time)
  }
)


app.get('/:word/echo',(req,res)=>{
    const {word} =req.params
    res.send({echo :word})
})

//   app.get('/name', (req, res) => {
//     var firstName = req.query.first;
//     var lastName = req.query.last;
//     // OR you can destructure and rename the keys
//     var { first: firstName, last: lastName } = req.query;
//     // Use template literals to form a formatted string
//     res.json({ name: `${firstName} ${lastName}` });
//   });


app.get('/name',(req,res)=>{
    var firstName =req.query.first
    var lastName = req.query.last
    var {first:firstName,last:lastName}=req.query
    res.json({name:`${firstName} ${lastName}`})
})


app.post('/name',(req,res)=>{
    var string = req.body.first + ' ' +req.body.last
   

    res.send(req.body)
})













 module.exports = app;
