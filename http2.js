var http = require("http");

var server =http.createServer(function(req,res){
    res.write('<h1>myself jaswanth</h1>')
    res.end();
})
server.listen(1234)