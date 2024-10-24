var Http = require('http')
const fs=require('fs')
const port=process.env.port || 3001;
var server =Http.createServer((req,res)=> {
    res.statusCode=200;
if(req.url==='/'){
    res.statusCode=200;

    Data=fs.readFile('fs.js',(err,data)=>
{ if(err){
console.log(err)}

res.end(data.toString());

})
}
else{
    res.statusCode=404;
    res.end('error')
}
})
server.listen(port, ()=>{
    console.log(`server is running on Port ${port}`)
    
}

)