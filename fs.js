var fs =require('fs')

/*fs.writeFile('myname.txt','This is from nodeFs nareshit', function(err) {
    if(err) throw err;
    console.log('file created')
})


fs.appendFile('myname.txt','This is from nodeFs nareshit\n', function(err) {
    if(err) throw err;
    console.log('file created')
})

fs.appendFile('myname.txt',Math.floor(Math.random()*(20-1))+1+' This is from nodeFs nareshit\n',function(err){
    if(err) throw err;
    console.log('File Crreated')
})

fs.readFile('myname.txt','utf-8', function(err,data) {
    if(err) throw err;
    console.log(data)
})

fs.readFile('db.json','utf-8', function(err,data) {
    if(err) throw err;
    console.log(data)
})

fs.rename('myname.txt','myName.txt', function(err) {
    if(err) throw err;
    console.log('file renamed')
})*/

fs.unlink('myName.txt', function(err) {
    if(err) throw err;
    console.log('file deleted')
})