const mongoose=require("mongoose");
const Userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
    }
});
const Usermodel=new mongoose.model("User",Userschema);
module.exports=Usermodel;