const bodyParser = require('body-parser')
 var express = require("express")
var app = express();
var port = 1202
var morgan = require("morgan")
var chalk = require("chalk")

var laptops=[
    
    { "companyName":"Lennovo",
       "Color":"Blue",
       "OS":"Windows",
        "Core":"Intel"
    },
    { "companyName":"Dell",
       "Color":"BLack",
       "OS":"Windows 10",
        "Core":"Intel-5"
    },
    { "companyName":"apple",
       "Color":"White",
       "OS":"mac",
        "Core":"Intel-7"
    }   
]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//logs
app.use(morgan('tiny'))

app.get('/',function(req,res){
    res.send(laptops)
})
app.get('/company/brand/:name/:Color',function(req,res){
    const laptop = laptops.find(laptop => (laptop.companyName ===(req.params.name))&&(laptop.Color ===(req.params.Color)));
 
if (!laptop) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
res.send(laptop);
    /*console.log(req.params.name)
    res.send(laptops)*/
})
app.post('/company',function(req,res){
    console.log(req.body)
    res.send(req.body)
})
app.put('/company/brand',function(req,res){
    console.log(req.body)
    res.send(req.body)
})
app.delete('/company/brand/name',function(req,res){
    console.log(req.body)
     res.send(laptops)
})
app.listen(port,function(err){
    if(err) throw err
    console.log(chalk.blue('server is running on port'+port))
})