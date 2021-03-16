import mongoose from 'mongoose';

const orderSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        requird:true,
        ref:"User"
    },
    orderItems:[
        {
            name:{type:String,required:true},
            qty:{type:Number,required:true},
            image:{type:String,required:true},
            price:{type:Number,required:true},
            product:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"Product"}
        }
    ],
    shippingAddress:{
        address:{type:String,required:true},
        city:{type:String,required:true},
        postalCode:{type:String,required:true},
        country:{type:String,required:true},
    },
    paymentMethod:{
        type:String,
        requird:true,
    },
    paymentResult:{
        id:{type:String},
        status:{type:String},
        updateTime:{type:String},
        emailAddress:{type:String},
    },
    textPrice:{
        type:Number,
        requird:true,
        default:0.0
    },
    shipingPrice:{
        type:Number,
        requird:true,
        default:0.0
    },
    totalPrice:{
        type:Number,
        requird:true,
        default:0.0
    },
    isPaid:{
        type:Boolean,
        requird:true,
        default:false
    },
    isPaidAt:{
        type:Date
    },
    isDeliver:{
        type:Boolean,
        requird:true,
        default:false  
    },
    deliverAt:{
        type:Date
    }
},{timestamps:true})

const Order=mongoose.model("Order",orderSchema)

export default Order