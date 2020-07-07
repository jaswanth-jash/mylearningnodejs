var express = require("express")
var app = express();
var port =  9001;
var morgan = require("morgan");
var chalk = require("chalk");
var stateRouter =express.Router();

app.use(morgan('tiny'))

var state =[
    {
    "id":1115,
    "city":"amaravathi",
    "name":"andhra pradesh"
},
{
    "id":1116,
    "city":"hyderabad",
    "name":"telangana"
},
{
    "id":1117,
    "city":"mumbai",
    "name":"maharastra"
},
{
    "id":1118,
    "city":"chennai",
    "name":"tamilnadu" 
},
{
    "id":1119,
    "city":"banglore",
    "name":"karnataka"
}
]
app.get('/',function(req,res){
    res.send("<h1>states and capitals</h1>")
})

stateRouter.route('/')
 .get(function(req,res){
     res.send(state)
 })
stateRouter.route('/details')
 .get(function(req,res){
     res.send("state details")
 })
   app.use('/state',stateRouter);


 app.listen(port,function(err){
    if(err) throw err;
    console.log(chalk.blue('server is running on port'+port))
})