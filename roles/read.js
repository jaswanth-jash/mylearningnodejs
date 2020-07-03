var fs =require("fs")

fs.readFile("roles.json","utf-8",function(err,data){
if(err) throw err;
console.log(data)
})