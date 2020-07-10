const bodyParser = require('body-parser')
 var express = require("express")
var app = express();
var port = 1201
var morgan = require("morgan")
var chalk = require("chalk")

var employees =[
    
    {
        "Name":"jashu",
        "Last Name":"jash",
        "Age":22,
        "City":"RKVBpeta"
    },

    {
         "Name":"sai",
         "Last Name":"kumar",
         "Age":19,
         "City":"RKVBpeta"
    },
    {
        "Name":"yojith",
        "Last Name":"yoji",
        "Age":6,
        "City":"USA"
    },
    {
        "Name":"jay",
        "Last Name":"jonna",
        "Age":2,
        "City":"USA"
    }
]
app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));


app.use(morgan('tiny'))

app.get('/',function(req,res){
    res.send(employees)
})
app.post('/add',function(req,res){
    console.log(req.body)
    res.send('/add')
})
app.put('/add/update',function(req,res){
    console.log(req.body)
    res.send('/add/update')
})
app.delete('/add/update/name',function(req,res){
    res.send('/add/update/name')
})
app.listen(port,function(err){
    if(err) throw err
    console.log(chalk.blue('server is running on port'+port))
})
