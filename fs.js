const fs=require('fs')
fs.writeFile('js.txt' ,'hello hassaan ', (err) => {
if(err){
console.log(err)   
}
else{
    console.log('file created successfullly')
}
})
fs.readFile('js.txt','utf-8',(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else {
        console.log(data)
    }
})
fs.appendFile('js.txt' ,'Hello  i am added',(err)=>
{
    if(err){
        console.log(err)
    }
    else
    {
        console.log('data deleted')
    }
})