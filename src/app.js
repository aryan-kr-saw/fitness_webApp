const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port=process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
const test = path.join(__dirname, "../public");
app.use(express.static(path.join(__dirname, "../public")));
app.listen(port, () => {
    console.log("listening..");
});
const contactSchema = {
            cName: String,
            cAge: Number,
            cGender: String,
            cLoc: String,
            cEmail: String,
            cPhone: Number,
            cMessage: String
        }
        const Message = mongoose.model("Message", contactSchema);
app.post("/contactus.html", function (req, res) {
    mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
        console.log("connection successful...");
        
        let newMessage = new Message({
            cName: req.body.name,
            cAge: req.body.age,
            cGender: req.body.gender,
            cLoc: req.body.loc,
            cEmail: req.body.email,
            cPhone: req.body.phone,
            cMessage: req.body.message

        });
        
        newMessage.save().then(() => {
             res.send("item saved to database");
            
        }).catch(err => {
                res.status(400).send("unable to save to database");
            });

    }).catch(err => { res.send("Unable to connect to database") });

})
const joinSchema = {
            jName: String,
            jDate:Date,
            jAge: Number,
            jGender: String,
            jBloodGroup: String,
            jServices:Array,
            jAdhar:Number,
            jMobile: Number,
            jEmail: String,
            jAddress: String
        }
        const JoinForm = mongoose.model("JoinForm", joinSchema);
app.post("/joinForm.html", function (req, res) {
    mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
        console.log("connection successful...");
        
        let newform = new JoinForm({
            jName: req.body.name,
            jDate: req.body.date,
            jAge: req.body.age,
            jGender: req.body.gender,
            jBloodGroup: req.body.bloodGroup,
            jServices:req.body.services,
            jAdhar:req.body.adhar,
            jMobile:req.body.mobile,
            jEmail: req.body.email,
            jAddress: req.body.address,

        });
        
        newform.save().then(() => {
             res.send("Form Submitted Succesfully");
            
        }).catch(err => {
                res.status(400).send("Unable to Submit Form");
            });

    }).catch(err => { res.send("Unable to connect to database") });

})
const TrainerSchema = {
            tName: String,
            tDate:Date,
            tAge: Number,
            tGender: String,
            tBloodGroup: String,
            tExperience:Number,
            tDuration_Unit:String,
            tExpert_in:Array,
            tJoin_as:String,
            tAdhar:Number,
            tMobile: Number,
            tEmail: String,
            tAddress: String
        }
        const TrainerForm = mongoose.model("TrainerForm", TrainerSchema);
app.post("/trainerform.html", function (req, res) {
    mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
        console.log("connection successful...");
        
        let newform = new TrainerForm({
            tName: req.body.name,
            tDate: req.body.date,
            tGender: req.body.gender,
            tBloodGroup: req.body.bGroup,
            tExperience:req.body.expGroup,
            tDuration_Unit:req.body.durationGroup,
            tExpert_in:req.body.expertise,
            tJoin_as:req.body.join,
            tAdhar:req.body.adhar,
            tMobile:req.body.mobile,
            tEmail: req.body.email,
            tAddress: req.body.address,

        });
        
        newform.save().then(() => {
             res.send("Form Submitted Succesfully");
            
        }).catch(err => {
                res.status(400).send("Unable to Submit Form");
            });

    }).catch(err => { res.send("Unable to connect to database") });

})
