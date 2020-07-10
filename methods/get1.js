const bodyParser = require('body-parser')
 var express = require("express")
var app = express();
var port = 1234
var morgan = require("morgan")
var chalk = require("chalk")

const books = [
    {
         "id": 1,
         "title": 'Harry Potter'
        },
    {
         "id": 2,
         "title": 'Twilight'
        },
    { 
        "id": 3,
        "title": 'Lorien Legacies'
    }
    ]
app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));


app.use(morgan('tiny'))

app.get('/',function(req,res){
    res.send('<h1>now i am writing some codes on https methods</h1>')
})

app.post('/team',function(req,res){
    console.log(req.body)
    res.send('/team')
})

app.put ('/team/manager',function(req,res){
    res.send('/team/manager')
})/*
app.get('/team/manager/lead',function(req,res){
    console.log(req.body)
    res.send('/team/manager/lead')
})
app.get('/team/manager/lead/trainers',function(req,res){
    res.send('/team/manager/lead/trainers')
})
*/
app.listen(port,function(err){
    if (err) throw err
    console.log(chalk.blue('server is running on port'+port))
})