const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app= express();
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/gymContact").then(()=>{console.log("connection successful...")}
).catch((err)=>{console.log(err)});
const contactSchema = {
    name: String,
    age: Number,
    gender: String,
    loc: String,
    email: String,
    phone: Number,
    message: String
}
const Message = mongoose.model("Message", contactSchema);
app.post("/contactus.html", function (req, res) {
    let newMessage = new Message({
        name: req.body.name,
        age: req.body.age,
        gender:req.body.gender ,
        loc: req.body.loc,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message

    });
    newMessage.save();
    res.send("Form Submitted Successfully..")
})