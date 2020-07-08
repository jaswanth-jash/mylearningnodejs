var express = require("express")
var app = express();
var port =  9999;
var morgan = require("morgan");
var chalk = require("chalk");
var restaurantsRouter =require('./src/routes/restaurantsRoute');
var citysRouter = require('./src/routes/cityRoutes');

//for logs
app.use(morgan('tiny'))

app.get('/',function(req,res){
    res.send("<h1>now i am developing expree code</h1>")
})

app.use('/restaurants',restaurantsRouter);
app.use('/citys',citysRouter);


app.listen(port,function(err){
  if(err) throw err;
  console.log(chalk.blue('server is running on port'+port))
})