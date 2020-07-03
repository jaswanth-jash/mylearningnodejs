var http =require('http');
var fs =require("fs");

var server =http.createServer(function(req,res){
    fs.readFile('roles2.json','utf-8',function(err,data){
        if(err) throw err
        res.write(data)
        res.end()
    })
})
server.listen(1212)