const express = require('express');
const mongoose = require('mongoose'); 
const productModel = require('./mongoose'); // This should import the model correctly

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/products')
    .then(() => {
        console.log('Connected successfully to MongoDB');
    })
    .catch((err) => {
        console.log('Connection error:', err);
    });

const items = [
    { id: 1, name: "AirPods", category: "accessories", price: 11400 },
    { id: 2, name: "iPhone 15 Pro Max", category: "smartphone", price: 150000 },
    { id: 3, name: "iPhone 15 Pro Max", category: "smartphone", price: 160000 },
    { id: 4, name: "iPhone 15 Pro Max", category: "smartphone", price: 170000 },
];

app.get('/', async (req, res) => {
    try {
        const data = await productModel.find(); 
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        console.error('Error !!! cant fetch data:', error);
        res.status(500).send('ERROR FETCHING DATA');
    }
});

app.post('/', async (req, res) => {
    try {
        const data = await productModel.insertMany(items);
        console.log(data);
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('ERROR !!! POSTING ITEMS');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});
