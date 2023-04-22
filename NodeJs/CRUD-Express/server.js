const express = require('express');
const morgan = require('express');

const app = express();
const products = [];


//MIDDELWARES
app.use(morgan('dev'));
app.use(express.json());
//MIDDELWARES

app.get('/',(req,res) => {
    res.send('No sale el morgan wei');
});
app.get('/products',(req,res) => {
    res.json(products);
});
app.post('/products',(req,res) => {
    products.push({...req.body,  id: products.length+1 });
    console.log({...req.body, id:products.length});
    res.send('Productos creados');
});
app.put('/products',(req,res) => {
    res.send('Actualizando productos');
});
app.delete('/products',(req,res) => {
    res.send('Borrando producto');
});
app.get('/products/:id',(req, res) => {
    const product = products.find(ele => ele.id == req.params.id);
    if (!product) return res.status(404).json({"Message": "Product not found"});
    res.json(product);
})

console.log('Server on port 3000');
app.listen(3000);