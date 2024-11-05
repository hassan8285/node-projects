const express = require('express');
const dbconnect = require('./connectmongo');
const mongodb=require('mongodb')

const app = express();
app.use(express.json());

let items =[
    {
        "id": 1,
        "name": "AirPods",
        "category": "accessories",
        "price": 11400
    },
    {
        "id": 2,
        "name": "iPhone 15 Pro Max",
        "category": "smartphone",
        "price": 150000
    }
]
app.get('/', async (req, res) => {
    try {
        let data = await dbconnect(); 
         data = await data.find().toArray(); 
        console.log(data);
        res.status(200).send(data); 
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send('An error occurred while retrieving data');
    }
});

app.post('/', async (req, res) => {
    try {
        let data = await dbconnect()
        data = await data.insertMany(items);
        res.send(data);
        console.log(data);
    }

    catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});
app.put('/' ,async(req,res)=>{
    let data=await dbconnect();
    data= await data.updateMany({name:"MacBook Air"},{$set :{price:200}})
    console.log(req.body);
    res.send({result:"updated"});
})
app.delete('/:id',async(req,res)=>{
    let data=await dbconnect();
    data=await data.deleteOne({_id : new mongodb.ObjectId(req.params.id)})
    res.send(data)

})

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000/');
});
