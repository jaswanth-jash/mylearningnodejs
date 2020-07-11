const bodyParser = require('body-parser')
 var express = require("express")
var app = express();
var port = 1202
var morgan = require("morgan")
var chalk = require("chalk")

var laptops=[
    
    { "CompanyName":"Lennovo",
       "Color":"Blue",
       "OS":"Windows",
        "Core":"Intel"
    },
    { "CompanyName":"Dell",
       "Color":"BLack",
       "OS":"Windows 10",
        "Core":"Intel-5"
    },
    { "CompanyName":"apple",
       "Color":"White",
       "OS":"mac",
        "Core":"Intel-7"
    }   
]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('tiny'))

app.get('/',function(req,res){
    res.send(laptops)
})
app.post('/company',function(req,res){
    console.log(req.body)
    res.send('/company')
})
app.put('/company/brand',function(req,res){
    console.log(req.body)
    res.send('/company/brand')
})
app.delete('/company/brand/name',function(req,res){
    res.send(laptops)
})
app.listen(port,function(err){
    if(err) throw err
    console.log(chalk.blue('server is running on port'+port))
})