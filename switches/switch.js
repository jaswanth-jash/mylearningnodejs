const _cal = require('./names');
var express = require('express');
var app = express();
var port = 8000;
var  bodyParser = require('body-parser');
var morgan = require("morgan")
var chalk = require("chalk")

app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(morgan('tiny'))  // how many log we use i.e 

app.get('/calculator/:operation',function(req,res){
    var rs;
           var a = parseInt(req.query.a);
             var b = parseInt(req.query.b);
var result;
switch(req.params.operation){
    case 'add':
             rs = _cal.add(a,b);
             
   if(rs>10){
              result = rs + ':rs is greater than 10';
  }
        else {
              result = rs + ':rs is less  than 10';
  }
  break;
  case 'sub':
             rs = _cal.sub(a,b);
             /*var a = parseInt(req.params.a);
             var b = parseInt(req.params.b);*/
   if(rs>0){
              result = rs + ':rs is greater than 0';
  }
        else {
              result = rs + ':rs is less  than 0';
  }
  break;
  case 'mul':
             rs = _cal.mul(a,b);
             //var a = parseInt(req.params.a);
             //var b = parseInt(req.params.b);
   if(rs>20){
              result = rs + ':rs is greater than 20';
  }
        else {
              result = rs + ':rs is less  than 20';
  }
  break;
  case 'div':
             rs = _cal.div(a,b);
            // var a = parseInt(req.params.a);
             //var b = parseInt(req.params.b);
   if(rs>10){
              result = rs + ':rs is greater than 10';
  }
        else {
              result = rs + ':rs is less  than 10';
  }
  break;
  case 'mod':
             rs = _cal.mod(a,b);
             //var a = parseInt(req.params.a);
             //var b = parseInt(req.params.b);
   if(rs>5){
              result = rs + ':rs is greater than 5';
  }
        else {
              result = rs + ':rs is less  than 5';
  }
  break;
  default:
     result=  'no operation found';
}
res.send(result);
})
app.listen(port,function(err){
    if(err) throw err;
    console.log(chalk.blue('server is running'+port))
})