const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    _id:{                   //StudentID(email ID)
        type:String,
        //required:true
    },
    name:{
        type:String
    },
    password:{
        type:String,
        //required:true
    },
    phoneNo :{
        type:Number,
        //required:true
    },
    Subscribe:{
        type:Boolean,
        //required:true,
        default:true
    },
     SkillSet:[String],
    WorkExperience:[{
        startDate:Date,
        endDate:Date,
        companyName:String,
        postName:String
    }],
    Education:[
        {
            education:{
                    marks: Number,
                    BoardOfExamination: String
            },
            startDate:Date,
            endDate:Date,
            MarksSecured:Number
        }
    ]
});

module.exports = mongoose.model('User',UserSchema);