require ("dotenv").config();

const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://testuser:testuser123@quadiro.ufbn6ro.mongodb.net/?retryWrites=true&w=majority&appName=quadiro")

const User=require("./modals/user.modal.js")

const express =require("express")
const cors=require("cors");

const app=express();

const jwt=require("jsonwebtoken")
const {authenticateToken}=require("./utils.js")

app.use(express.json())
app.use(
    cors({
        origion:"*"
    })
)
app.get("/",(req,res)=>{
    res.json({data:"hello"});
})

//create account
app.post("/create-account",async (req,res)=>{
    const {fullName,email,password}=req.body;
    if(!fullName){
        return res.status(400).json({error:true,message:"enter your name"})

    }
    if(!email){
        return res.status(400).json({error:true,message:"enter valid email"})

    }
    if(!password){
        return res.status(400).json({error:true,message:"enter your password"})

    }
    const isUser= await User.findOne({email:email});
    if (isUser){
    return res.json({
        error:true,
        message:"user already exists"
    })
    }
    const user=new User({
        fullName,
        email,
        password
    })
    await user.save();
    const accessToken=jwt.sign({user},process.env.ACCESS_TOKEN_SECRET)
    return res.json({
        error:false,
        user,
        accessToken,
        message:"Registration successfull",
    })
})




app.listen(8000)

module.exports=app;