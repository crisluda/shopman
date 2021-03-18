import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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
userSchema.methods.matchPassword=async function(enteredPassword){
return await bcrypt.compare(enteredPassword,this.password)
}
userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

const User=mongoose.model("User",userSchema)

export default User