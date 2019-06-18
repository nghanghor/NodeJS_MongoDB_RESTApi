const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email:{                   //StudentID(email ID)
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNo :{
        type:Number,
        required:true
    },
    Subscribe:{
        type:Boolean,
        //required:true,
        default:function(){
            if(this.email!=null){
                return true;
            }
            return false;
        }
    },
     SkillSet:[String],
    WorkExperience:[{
        startString:String,
        endString:String,
        companyName:String,
        postName:String
    }],
    Education:[
        {
           BoardOfExamination:String,
           MarksObtained:Number,
           PassingYear:String
        }
    ]
});

module.exports = mongoose.model('User',UserSchema);