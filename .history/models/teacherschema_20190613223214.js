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
            startDate:{type:String,required:true},
            endDate:{type:String,required:true},
            companyName:{type:String,required:true},
            postName:{type:String,required:true}
            
        }],
    Education:[{
            BoardOfExamination:{type:String,required:true},
            MarksObtained:{type:String,required:true},
            PassingYear:{type:String,required:true}
    }]
});

module.exports = mongoose.model('Teacher',TeacherSchema);