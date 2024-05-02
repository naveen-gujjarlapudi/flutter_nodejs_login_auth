const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        requried:true,
        type:String,
        trim:true
    },
    email:{
        requried:true,
        type:String,
        trim:true,
        validate:{
            validator:(value) => {
                const re =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },
            message:"please Enter Valid Email address"
        },

    },
    password:{
        requried:true,
        type:String,
    }

});

const User = mongoose.model("User",userSchema);




module.exports = User;