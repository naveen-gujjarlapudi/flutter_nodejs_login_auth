const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const authrouter = express.Router();


// Sign up route
authrouter.post("/api/signup",async (req,res)=>{
    try{
        const { name , email , password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res
            .status(400)
            .json({message:"User with same user id already exists"});
        }

        const hasedPassword = await bcryptjs.hash(password, 8);
        let user = new User({
            email,
            password:hasedPassword,
            name,
        });
        user = await user.save();
        res.json(user);
    }
    catch(e){
        res.status(500)
        .json({error: e.message})

    }

})

//sign in 

authrouter.post('api/signin',async (req,res)=>{
    try{
        const {email, password } = req.body;
        
        const user = await User.findOne({email});
        if(!user){
            return res
            .status(400)
            .json({message:"User with this email does not exists"});
        }
        const isMAtch = await bcryptjs.compare(password,user.password);
        if(!isMAtch){
            return res.status(400).json({msg:"Incorrect password."})
        }
        const token = jwt.sign({id:user._id},"passwordKey");

        res.json({token, ...user._doc});
        

    }
    catch(e){
        res.status(500).json({error:e.message});

    }

});


module.exports = authrouter;