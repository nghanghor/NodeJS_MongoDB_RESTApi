const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var Education = new Schema(

);


const TeacherSchema = new Schema({
    _id :{                              //teacherId(Email ID)
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    WorkExperience:[{
            startDate:Date,
            endDate:Date,
            companyName:String,
            postName:String,
            required:true
        }],
    Education:[{
        education:{
            marks: Number,
            BoardOfExamination: Number
        },
        startDate:Date,
        endDate:Date,
        MarksSecured:Number,
        required:true
    }]
});

module.exports = mongoose.model('Teacher',TeacherSchema);