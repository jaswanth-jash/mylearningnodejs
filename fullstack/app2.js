var express = require ("express")
var app = express();
var port = 3421;
app.get('/',function(req,res){
    res.send('<h1>welcome to my world</h1>')
})



   app.listen(port,function(err){
       if(err) throw err
       console.log('server is running on port'+port)
   })