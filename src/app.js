const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const test = path.join(__dirname, "../public");
app.use(express.static(path.join(__dirname, "../public")));
app.listen(8000, () => {
    console.log("listening..");
});
app.post("/contactus.html", function (req, res) {
    mongoose.connect("mongodb+srv://aryan:12345@cluster0.drvmfrn.mongodb.net/FitnessWebsite?retryWrites=true&w=majority").then(() => {
        console.log("connection successful...");
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
        let newMessage = new Message({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            loc: req.body.loc,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message

        });
        
        newMessage.save().then(() => {
             res.send("item saved to database");
            
        }).catch(err => {
                res.status(400).send("unable to save to database");
            });

    }).catch(err => { res.send("Unable to connect to database") });

})

app.post("/joinForm.html", function (req, res) {
    mongoose.connect("mongodb+srv://aryan:12345@cluster0.drvmfrn.mongodb.net/FitnessWebsite?retryWrites=true&w=majority").then(() => {
        console.log("connection successful...");
        const joinSchema = {
            name: String,
            date:Date,
            age: Number,
            gender: String,
            bloodGroup: String,
            services:Array,
            adhar:Number,
            mobile: Number,
            email: String,
            address: String
        }
        const JoinForm = mongoose.model("JoinForm", joinSchema);
        let newform = new JoinForm({
            name: req.body.name,
            date: req.body.date,
            gender: req.body.gender,
            bloodGroup: req.body.bGroup,
            services:req.body.services,
            adhar:req.body.adhar,
            mobile:req.body.mobile,
            email: req.body.email,
            address: req.body.address,

        });
        
        newform.save().then(() => {
             res.send("Form Submitted Succesfully");
            
        }).catch(err => {
                res.status(400).send("Unable to Submit Form");
            });

    }).catch(err => { res.send("Unable to connect to database") });

})

app.post("/trainerform.html", function (req, res) {
    mongoose.connect("mongodb+srv://aryan:12345@cluster0.drvmfrn.mongodb.net/FitnessWebsite?retryWrites=true&w=majority").then(() => {
        console.log("connection successful...");
        const TrainerSchema = {
            name: String,
            date:Date,
            age: Number,
            gender: String,
            bloodGroup: String,
            Experience:Number,
            Duration_Unit:String,
            Expert_in:Array,
            Join_as:String,
            adhar:Number,
            mobile: Number,
            email: String,
            address: String
        }
        const TrainerForm = mongoose.model("TrainerForm", TrainerSchema);
        let newform = new TrainerForm({
            name: req.body.name,
            date: req.body.date,
            gender: req.body.gender,
            bloodGroup: req.body.bGroup,
            Experience:req.body.expGroup,
            Duration_Unit:req.body.durationGroup,
            Expert_in:req.body.expertise,
            Join_as:req.body.join,
            adhar:req.body.adhar,
            mobile:req.body.mobile,
            email: req.body.email,
            address: req.body.address,

        });
        
        newform.save().then(() => {
             res.send("Form Submitted Succesfully");
            
        }).catch(err => {
                res.status(400).send("Unable to Submit Form");
            });

    }).catch(err => { res.send("Unable to connect to database") });

})