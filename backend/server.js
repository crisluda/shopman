const express = require('express');
const products = require('./data/products');
const { report } = require('process');
 const app=express()
app.get("/",(req,res)=>{
res.send(`hoooooo`)
})
app.get("/api/products",(req,res)=>{
    res.json(products)
    })
    app.get("/api/products/:id",(req,res)=>{
        const product= products.find(p=>p._id===req.params.id)
        res.json(product)
        })   
    






 app.listen(5000,()=>{
     console.log(`server is runing on http://127.0.0.1:5000`);
 })