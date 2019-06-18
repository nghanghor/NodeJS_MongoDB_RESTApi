const {validationResult} = require('express-validator/check');
const bcrypt = require('bcrypt');

//Here User points to the collection students
const User = require('../models/Studentschema');

exports.Signup = (req,res,next) => {
     const errors = validationResult(req);
     console.log("Errors "+errors);
     let err ;
     if(!errors.isEmpty()){
         err = new Error('User Input invalid');
         err.statusCode = 422;
         err.data = errors.array();
         throw err;
     }
     if(err!=null)
     return res.json('/signup');//res.redirect('/signup');

    var _id = req.body.email;
    var name = req.body.name;
    var phoneNo = req.body.phoneNo;
    var address = req.body.address;
    var password = req.body.password;
    var Subscribe = req.body.Subscribe;
    var Workexp = req.body.WorkExperience;
    var Education = req.body.Education;
    let flg = false;
    bcrypt.hash(password,12).then(hashedPw => {
            const user = new User();
            user._id = _id;
            user.name = name;
            user.phoneNo = phoneNo;
            user.address = address;
            user.password = hashedPw;
            user.Subscribe = Subscribe;
            user.WorkExperience = Workexp;
            user.Education = Education;
            user.save();
        }
    ).then(result => {
            flg = true;
            console.log("User Signed Up Successfully");
            
        }
    ).catch(err => {
        console.log(err);
    })
    console.log(flg);
    if(flg)
    res.json('/login');//redirect('/login');
    else
    res.json('/signup');//redirect('/signup');
};

exports.Login = (req,res,next) => {
    const _id = req.body.email;
    const password = req.body.password;
    User.findOne({_id:_id})
            .then(user => {
                if(!user){
                    console.log("A user with the given email can't be found");
                    throw error = new Error('Email cannot be found');
                }
                return bcrypt.compare(password,user.password);
            })
            .then(result => {
                if(!result){
                    console.log("Password doesn't match");
                    throw error = new Error('Passwords don\'t match');
                }
                console.log("User Logged in");
                res.json('/home');//redirect('/home');
            })
            .catch(error => {
                console.log(error);
            })
}