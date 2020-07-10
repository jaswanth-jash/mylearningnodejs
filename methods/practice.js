const bodyParser = require('body-parser')
var express = require('express');
var app = express();
var port =8700;
var employees =[
    
        {"Name":"Rekha",
         "Last Name":"Bapu",
          "Age":33,
           "City":"Puttur"
        },

        {"Name":"Radha Krishna",
         "Last Name":"Gunta",
          "Age":38,
           "City":"RKVBpeta"
        },
        {"Name":"Kaveesh",
         "Last Name":"Gunta",
          "Age":6,
           "City":"Charlotte"
        },
        {"Name":"Saatvik",
         "Last Name":"Gunta",
          "Age":5,
           "City":"Charlotte"
        }
        
]
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
        { "CompanyName":"Mac",
           "Color":"White",
           "OS":"mac",
            "Core":"Intel-7"
        }
        
        
]
app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

app.post('/',function(req,res){
    res.send('employeeslist')
})

app.post('/dev',function(req,res){
    console.log(req.body)
    res.send('dev')
})
app.put('/klas',function(req,res){
    res.send('klas')
})
app.put('/klas/update',function(req,res){
    console.log(req.body)
    res.send('/klas/update')
})
/*
app.post('/employees',function(req,res){
    res.send(employees)
})
app.put('/laptops',function(req,res)
{
    console.log(req.body)
    res.send(laptops)
})
app.put('/laptops/products',function(req,res)
{
    res.send('laptops/product')
})


app.get('/',function(req,res){
    res.send('employeeslist')
})
*/
app.listen(port ,function(err){
    if(err) throw err;
    console.log('server is running port'+port)
})