const {validationResult} = require('express-validator/check');
const bcrypt = require('bcrypt');

//Here User points to the collection students
const User = require('../models/Studentschema');

exports.Signup = (req,res,next) => {
     const errors = validationResult(req);
     console.log("Errors "+JSON.stringify(errors));
     let err ;
     if(!errors.isEmpty()){
         err = new Error('User Input invalid');
         err.statusCode = 422;
         err.data = errors.array();
         throw err;
     }
     if(err)
     return res.json('/signup');//res.render('/signup');

    var email = req.body.email;
    var name = req.body.name;
    var phoneNo = req.body.phoneNo;
    var address = req.body.address;
    var password = req.body.password;
    var Subscribe = req.body.Subscribe;
    var Workexp = req.body.WorkExperience;
    var Education = req.body.Education;
    let flg = false;
    User.findOne({email:email})
    .then(res =>{
            if(!res){
                bcrypt.hash(password,12).
                then(hashedPw => {
                    const user = new User();
                    user.email = email;
                    user.name = name;
                    user.phoneNo = phoneNo;
                    user.address = address;
                    user.password = hashedPw;
                    user.Subscribe = Subscribe;
                    user.WorkExperience = Workexp;
                    user.Education = Education;
                    user.save();
                    }
                )
                .then(res =>{
                    flg = true;
                })
            }
            else{
                console.log("User already signed up");
            }
    }).
    then(result => {
            if(flg)
            console.log("User Signed Up Successfully");
    })
    .then( result =>{
        if(flg)
        res.render('/login');
        else
        res.render('/signup');
    })
    .catch(err => {
        console.log(err);
    })
};

exports.Login = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email:email})
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
                res.render('/home');
            })
            .catch(error => {
                console.log(error);
            })
}