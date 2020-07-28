var express = require('express');
var app = express();
var port = 9000;
var  bodyParser = require('body-parser');
var morgan = require("morgan")
var chalk = require("chalk")
var a;
var b;
return a,b; 

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(morgan('tiny'))  // how many log we use i.e 

app.get('/conditions/:operation',function(req,res){
    var rs;
           var a = parseInt(req.query.a);
           var b = parseInt(req.query.b);
    var result;  
switch(req.params.operation){
    case 'num':
             
   if(a>b){
              result =  'a is greater than b ';
  }
        else if (a<b){
              result =  'a rs is less  than b';
  }
  else {
      result = 'a is equal to b';
  }
}
res.send(result);
})
app.listen(port,function(err){
    if(err) throw err;
    console.log(chalk.blue('server is running'+port))
})

