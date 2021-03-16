import express from 'express';
// import products from './data/products.js';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import colors from 'colors';
import prouductRoutes from './routes/productRoutes.js';
import {notFound,errorHandler} from './middleware/errorMiddleware.js';
dotenv.config()
connectDB()
 const app=express()

app.get("/",(req,res)=>{
    res.send(`hoooooo`)
    })
  
    app.use("/api/products",prouductRoutes)

    app.use(notFound)

    app.use(errorHandler)




     const PORT=process.env.PORT || 5000
 app.listen(PORT,()=>{
     console.log(`server is runing on http://127.0.0.1:${PORT}`.blue.underline.bold);
 })