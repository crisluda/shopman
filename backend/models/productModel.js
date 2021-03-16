import mongoose from 'mongoose';

const reviewSchema=mongoose.Schema({
    name:{type:String,require:true},
    rating:{type:Number,require:true},
    comment:{type:String,require:true},
},{timestamps:true})

const productSchema=mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        requird: true,
        ref: "User"
    },
    name:{
        type:String,
        requird:true
    },
    image:{
        type:String,
        requird:true,
    },
    brand:{
        type:String,
        requird:true
    },
    category:{
        type:String,
        requird:true,
    },
    description:{
        type:String,
        requird:true,
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        requird:true,
        default:0
    },
    numReviews:{
        type:Number,
        requird:true,
        default:0
    },
    price:{
        type:Number,
        requird:true,
        default:0
    },
    countInstock:{
        type:Number,
        requird:true,
        default:0
    }
},{timestamps:true})

const Product=mongoose.model("Product",productSchema)

export default Product