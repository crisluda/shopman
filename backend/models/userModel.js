import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    name:{
        type:String,
        requird:true
    },
    email:{
        type:String,
        requird:true,
        unique:true
    },
    password:{
        type:String,
        requird:true
    },
    isAdmin:{
        type:Boolean,
        requird:true,
        default:false
    }
},{timestamps:true})

const User=mongoose.model("User",userSchema)

export default User