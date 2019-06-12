const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseGraphSchema = new Schema({
    _id:{                       //CourseID
        type:Number,
        required:true
    },
    StudentID:{
        type:String
    },
    StartDate:{
        type:Date
    },
    EndDate:{
        type:Date
    }
});


module.exports = mongoose.model('CourseGraph',CourseGraphSchema);