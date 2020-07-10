const bodyParser = require('body-parser')
 var express = require("express")
var app = express();
var port = 1200
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
    res.send('books')
})
app.get('/app',function(req,res){
    res.send(books)
})
app.post('/app/book',function(req,res){
    console.log(req.body)
    res.send('/app/book')
})
app.put('/app/book/id',function(req,res){
    console.log(req.body)
    res.send('/app/book/id')
})
app.delete('/app/book/id',function(req,res){
    res.send(books)
})
app.listen(port,function(err){
    if (err) throw err
    console.log(chalk.blue('server is running on port'+port))
})