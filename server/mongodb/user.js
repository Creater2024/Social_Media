const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/socialMedia")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((e) => {
    console.log("failed", e);
  });
  const user = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    UserName:{
        type:String,
        required:true
    },
    Post:{
        type:Array,
    },
     
  })
  const userData = mongoose.model("UserData",user)
module.exports = userData
