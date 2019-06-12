const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var Education = new Schema(
    {
        marks: Number,
        BoardOfExamination: Number
    }
);

var Skills = new Schema({type:String});
var StartDate = new Schema({type:Date});
var EndDate = new Schema({type:Date});
var CompanyName = new Schema({type:String});
var PostName = new Schema({type:String});

const UserSchema = new Schema({
    _id:{                   //StudentID(email ID)
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    MobileNo :{
        type:Number,
        required:true
    },
    Subscribe:{
        type:Boolean,
        required:true,
        default:true
    },
    SkillSet:{
        skill:[Skills]        
    },
    WorkExperience:[{
        startDate:Date,
        endDate:Date,
        companyName:String,
        postName:String
    }],
    Education:[{
        education:Education,
        startDate:Date,
        endDate:Date,
        MarksSecured:Number
    }]
});

module.exports = mongoose.model('User',UserSchema);