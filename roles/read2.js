var fs =require('fs')

fs.readFile('roles2.json','utf-8',function(err,data){
    if(err)throw err;
    console.log(data)
})