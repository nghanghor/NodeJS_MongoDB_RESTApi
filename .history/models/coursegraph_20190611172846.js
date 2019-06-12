const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var StudentID = new Schema({type:String});
var StartDate = new Schema({type:Date});
var EndDate = new Schema({type:Date});

// const CourseGraphSchema = new Schema({
//     _id:{                       //CourseID
//         type:Number,
//         required:true
//     },
//     StudentID:{
//         type:[StudentID]
//     },
//     StartDate:{
//         type:[StartDate]
//     },
//     EndDate:{
//         type:[EndDate]
//     }
// });


module.exports = mongoose.model('CourseGraph',CourseGraphSchema);