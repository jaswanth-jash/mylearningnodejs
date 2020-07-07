var express = require ("express")
var app = express();
var port = 1536;

app.get('/',function(req,res){
    res.send('<h1> i am interesting to write coding</h1>')
})

app.listen(port,function(err){
    if (err) throw err
    console.log('server is running on port' +port)
})
