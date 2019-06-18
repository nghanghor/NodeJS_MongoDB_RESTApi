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
    
    if(email && name && password && phoneNo){
        User.findOne({email:email})
        .then(result =>{                //result will be null if no match exists of the email
            console.log("33 "+result);
                if(!result){
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
                }
                else{
                    console.log("55 "+flg);
                    if(!flg)
                    console.log("User already signed up");
                }
        }).
        then(result => {        //result will be undefined if email doesn't match
          //  console.log("57 "+result);
            if(!result){
                console.log("User Signed Up Successfully");
          //  console.log("60 "+flg);
            return flg = true;
            }
        })
        .then( result =>{       //result will be undefined
            console.log("64 "+result);
            if(flg)
            res.json('login');
    //        res.render('/login');
            else
            res.json('signedup');
    //      res.render('/signup');
            console.log("71 "+flg);
        })
        .catch(err => {
            console.log(err);
        })
    }
    else{
        console.log("Email,name,password & phoneNo are required fields");
    }
};

exports.Login = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email:email})
            .then(user => {                 //user will be undefined if no match is found
                if(!user){
                    console.log("A user with the given email can't be found");
                    throw error = new Error('Email cannot be found');
                }
                return bcrypt.compare(password,user.password);
            })
            .then(result => {               //result will be undefined if password's doesn't match
                if(!result){
                    console.log("Password doesn't match");
                    throw error = new Error('Passwords don\'t match');
                }
                console.log("User Logged in");
                res.json('/home');
            })
            .catch(error => {
                console.log(error);
            })
}