var http =require('http');
var server = http.createServer(function(req,res){
    res.write('<h1> hello world</h1>')
    res.end()
})
server.listen(3400)