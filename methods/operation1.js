var cal = require('./calculator1');
var express = require('express');
var app = express();
var port = 8000;
var  bodyParser = require('body-parser');
var morgan = require("morgan")
var chalk = require("chalk")

app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(morgan('tiny'))  // how many log we use i.e 

app.get('/calculator/add',function(req,res)
{
  var rs = 0 ;
  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);
  rs = cal.add(a,b);
  res.json(rs);
})


app.get('/calculator/sub',function(req,res)
{
  var rs = 0 ;
  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);
  rs = cal.sub(a,b);
  res.json(rs);
})

app.get('/calculator/mul',function(req,res)
{
  var rs  ;
  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);
  rs = cal.mul(a,b);
  res.json(rs);
})

app.get('/calculator/div',function(req,res)
{
  var rs = 0 ;
  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);
  rs = cal.div(a,b);
  res.json(rs);
})

app.get('/calculator/mod',function(req,res)
{
  var rs = 0 ;
  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);
  rs = cal.mod(a,b);
  res.json(rs);
})

app.listen(port,function(err){
    if(err) throw err;
    console.log(chalk.blue('server is running'+port))
})