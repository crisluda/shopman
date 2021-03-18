import asyncHandler  from 'express-async-handler'
import Product from '../models/productModel.js';

const getProducts=asyncHandler( async (req,res)=>{
    const product= await Product.find({})
    // res.status(401)
    // throw new Error("Not Autorized")
    res.json(product)
})

const getProductById=asyncHandler(async(req,res)=>{
    const product= await Product.findById(req.params.id)
    // console.log(product);
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error("Product is not found")
    }
})
export{getProducts,getProductById}