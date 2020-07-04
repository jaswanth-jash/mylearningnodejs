var express = require("express")
var app = express();
var port = process.env.PORT || 9999;

 app.get('/',function(req,res){
     res.send("<h1>now i am developing expree code</h1>")
 })
 app.get('/about',function(req,res){
     res.send("<h1>this about express code</h1>")
 })



app.listen(port,function(err){
    if(err) throw err;
    console.log('server is running on port'+port)
})