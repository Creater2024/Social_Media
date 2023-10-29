const express = require("express");
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const userPost = require("./mongodb/post");
const user = require("./mongodb/user");

app.post("/", async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
        const check = await user.findOne({ Email: email });
        let response = "not exist"; // Default response
        if (check) {
            if (check.Email === email && check.Password === password) {
                response = "exist";
            } else if (check.Email === email && check.Password !== password) {
                response = "wrong password";
            }
        }
        console.log(response);
        res.json(response); // Send the response once
    } catch (e) {
        res.json("not exist"); // Handle any errors by sending the response
        console.log(e);
    }
});

// signup
app.post("/signup", async (req, res) => {
    const { name,email,userName,password} = req.body;
    console.log(req.body);
    try {
        const check = await user.findOne({ UserName: userName});
        
        if (check) {
            res.json("exist");
            console.log("Inside the if");
        } else {
            console.log("Inside else");
            const data = {
                Name: name,
                Email: email,
                UserName:userName,
                Password: password,
            };
            await user.insertMany([data]);
            res.json("not exist");
        }
    } catch (e) {
        console.log(e);
        res.json("not exist");
    }
});

//Home 
app.get("/Home", async (req, res) => {
    // console.log("To server home");
    const { Email } = req.query;
    try {
        const check = await user.findOne({ Email:Email});
        if (check) {
            res.json(check);
        } else {
            res.json("not exist");
        }
    } catch (e) {
        console.log(e);
        res.json("not exist");
    }
});

//Create Post 
app.post("/createpost", async (req, res) => {
    console.log("To server createpost");
    const { Email,status } = req.body;
    try {
        // const check = await userPost.findOne({ Email: Email});
        
        // if (check) {
        //     res.json("exist");
        //     console.log("Inside the if");
        // } else
        //  {
            console.log("Inside else");
            const data = {
                Email: Email,
                Status:status,
                Date:new Date()
            };
            await userPost.insertMany([data]);
            res.json("submit");
        // }
    } catch (e) {
        console.log(e);
        res.json("not exist");
    }
});

// Get All Post
app.get("/allPost", async (req, res) => {
    // console.log("To server home");
    const { Email } = req.query;
    try {
        const check = await userPost.find({ Email:Email});
        if (check) {
            res.json(check);
        } else {
            res.json("not exist");
        }
    } catch (e) {
        console.log(e);
        res.json("not exist");
    }
});
app.listen(5000,()=>{
    console.log("port is connected");
})
