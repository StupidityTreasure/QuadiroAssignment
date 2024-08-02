const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const userSchema=new Schema({
    fullName:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
        
    },
    createdOn:{
        type:Date,
        default:new Date().getTime(),
    }
    
    
    
    
})
module.exports =mongoose.modelNames("User",userSchema)