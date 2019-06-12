const express = require('express');

const router = express.Router();

const { body } = require('express-validator/check');

const AuthenticiateStudent = require('../controllers/student');
const AuthenticiateTeacher = require('../controllers/teacher');

const student = require('../models/Studentschema');
const teacher = require('../models/teacherschema');

//get /student/login
router.get('/student/login');

//post /student/login
router.post('/student/login',AuthenticiateStudent.Login);

//get /student/signup
router.get('student/signup');

//post /student/signup
router.post('/student/signup',[
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        return student.findOne({ email: value }).then(teacherDoc => {
          if (teacherDoc) {
            return Promise.reject('E-Mail address already exists!');
          }
        });
      })
      .normalizeEmail(),
    body('password')
      .trim()
      .isLength({ min: 5 })
  ],
  AuthenticiateStudent.Signup
);

router.get('/teacher/signup');

router.post('/teacher/signup',
[
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email.')
    .custom((value, { req }) => {
      return teacher.findOne({ email: value }).then(teacherDoc => {
        if (teacherDoc) {
          return Promise.reject('E-Mail address already exists!');
        }
      });
    })
    .normalizeEmail(),
  body('password')
    .trim()
    .isLength({ min: 5 })
],AuthenticiateTeacher.Signup);

router.get('/teacher/login');

router.post('/teacher/login',AuthenticiateTeacher.Login);


module.exports  = router;