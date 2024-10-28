const express = require('express')
const path=require('path')

const app = express();
const publicPath=path.join(__dirname,'public')
app.set('view engine','ejs');

app.get('/profile',(req,res)=>{
    const user={
        name:'hassan',
        email:'hello@gmailcom'
    }
res.render('profile',{user})
})


const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send('Welcome please enter your age to access')
    }
    else if(req.query.age<18){
        res.send('<h1> Cant access</h1>')
    }
else{
    next()
}
}

app.get('',reqFilter,(req,res)=>{


    res.send(`<h1>welcome to Home Page,</h1>`)

})

app.get('/contact',(_,res)=>{
    res.sendFile(`${publicPath}/contact.jsx`)})



    
    app.listen(3000);
