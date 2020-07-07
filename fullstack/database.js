var express = require("express")
var app = express();
var port =  9000;
var morgan = require("morgan");
var chalk = require("chalk");
var databaseRouter =express.Router();

app.use(morgan('tiny'))

var database =[
    {
        "id":101,
        "class":"10th",
        "school":"Jnana jyothi vidya mandir",
        "place":"puttur"
    },
    {
        "id":102,
        "class":"12th",
        "college":"Narayana junior college",
        "place":"nellore"
    },
    {
        "id":103,
        "class":"B.E-B.Tech",
        "college":"RMD Engineering college",
         "place":"chennai"
    },
    {
        "id":104,
        "course":"java-python",
        "institution":"ABC Technology",
        "place":"banglore"
    },
    {
        "id":105,
        "course":"nodejs/reactjs",
         "institution":"naresh it",
         "place":"hyderabad" 
    }
]
app.get('/',function(req,res){
    res.send("<h1>my profile</h1>")
})

databaseRouter.route('/')
 .get(function(req,res){
     res.send(database)
 })
 databaseRouter.route('/details')
 .get(function(req,res){
     res.send("database details")
 })
   app.use('/database',databaseRouter);


 app.listen(port,function(err){
    if(err) throw err;
    console.log(chalk.blue('server is running on port'+port))
})