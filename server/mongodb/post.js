const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/socialMedia")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((e) => {
    console.log("failed", e);
  });
  const userPost = new mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
    }
  })
  const userPostData = mongoose.model("UserPostData",userPost)
  module.exports = userPostData