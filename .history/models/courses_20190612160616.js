const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    _id :{                              //CourseID
        type:String,
        //required:true
    },
    name:{
        type:String,
        //required:true
    },
    lessons:[{
        "lessonNO.":Number,
        "PDF":String,
        "VideoTutorials":String
    }],
    type:{
        free:{
            type:Boolean
        },
        paid:{
            type:Boolean
        },
        timestamp:{
            type:Boolean
        }
    },
    createdBy:{
        type:String,
        //required:true
    },
    Fees:{
        type:Number
    }    
});

module.exports = mongoose.model('Course',CourseSchema);