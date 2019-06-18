const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    email :{                              //teacherId(Email ID)
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
            startDate:String,
            endDate:String,
            companyName:String,
            postName:String,
            required:true
        }],
    Education:[{
            BoardOfExamination:String,
            MarksObtained:Number,
            PassingYear:String,
            required:true
    }]
});

module.exports = mongoose.model('Teacher',TeacherSchema);