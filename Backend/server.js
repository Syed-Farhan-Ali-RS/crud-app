const express = require("express");
const mongoose = require("mongoose");
const app = express()
const PORT = 5000


// To Stringyfiy the data we have to use middleware  
app.use(express.json());

//db connection
mongoose.connect("mongodb+srv://user1:user1.2.3@appcrud.nvrgfwq.mongodb.net/?retryWrites=true&w=majority&appName=appcrud").then(() =>{
    console.log("DB connection Succesfully");
}).catch((error) => {
   res.send(error);
});


// User Schema
const userSchenna = new mongoose.Schema(
{
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    contact:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
    },
}, {timestamps: true});


// create User
const User = mongoose.model("User",userSchenna)
app.post("/createuser", async (req,res)=>{
    try {
        const bodyData = req.body;
        const user = new User(bodyData); 
        const userData = await user.save();

        res.send(userData);
    } catch (error) {
        res.send(error);
    }
});

// Reading Multiple User

app.get('/readallusers', async (req, res) => {
    try {
        const userData = await User.find({});
        res.send(userData);
    } catch (error) {
        res.send(error);
    }
});

// Read Single User 
app.get('/readuser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById({_id:id})
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

// Update Selected User 
app.put('/updateuser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndUpdate({_id:id}, req.body,{new: true})
        res.send(user);
    } catch (error) {
        res.send(error);
    }

});

// Delete Selected User 
app.delete('/delete/:id', async (req, res) =>{
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete({_id:id});
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

app.get("/", (req, res) => {
    res.send("from get route");
});

app.listen(PORT, ()=>{
    console.log(`Server is Running ${PORT}`);
});