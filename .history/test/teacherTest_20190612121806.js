const assert = require('chai').assert;

const app = require('../nodels/courses');

describe('app',()=>{
    it('app should return course courseschema',()=>{
            assert.equal(app(),{
                _id :'MA101',
                name:'Maths',
                lessons:[{
                    "lessonNO.":"01",
                    "PDF":"a.txt",
                    "VideoTutorials":"/ma11"}
                    ,{
                    "lessonNO.":"02",
                    "PDF":"b.txt",
                    "VideoTutorials":"/ma12"}
                    ],
                type:{
                    free:true
                },
                createdBy:"Nikhil",
                Fees:"0"    
            },"Course successfully inserted");
    });
});