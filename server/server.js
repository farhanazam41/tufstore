const express = require('express');
const products = require('./data/products.js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req,res) => {
    res.send('API is running...')
})

app.get('/api/products', (req, res) => {
    res.send(products)
})

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;

    const product = products.find(p => p._id === id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message: 'Product not found'});
    }
    
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));