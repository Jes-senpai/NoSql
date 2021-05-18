const express = require('express');
const mongoose = require('mongoose');
const demo = express.Router();
const User = require("./Models/User");
demo.route("/")
.get((req,res)=>{
        let finaldata={};
        // avg score of the users and grouping by null ----read about this :)
        User.aggregate([{$group: {_id:null, avg: {$avg:"$Result.score"} } }])
        .then(result=>{
            finaldata["avg"] =result[0].avg;
        })
        //Finding min score to be that personality type
        User.aggregate([{$group: {_id:"$Result.type", min: {$min:"$Result.score"} } }])
        .then(result=>{
            finaldata["min"] =result;
        })
    
        //Finding min score to be that personality type
        User.aggregate([{$group: {_id:"$Result.type", max: {$max:"$Result.score"} } }])
        .then(result=>{
            finaldata["max"] =result;
        })
        // Finding the count of  each selected option for each question
        let data1 =[]
        for(let i=1; i<21;i++){
            let val = "$Q"+i+".text"
            let ind ="Q"+i;
            User.aggregate([{$group: {_id:val,count: { $sum: 1 }}}])
            .then(result=>{
                finaldata[ind] =result;
            })
        }
    
        // Number of people in each personality type
        User.aggregate([{$group: {_id:"$Result.type",count: { $sum: 1 }}}])
        .then(result=>{
            finaldata["type"] =result; 
        })
        // To get how many users chose each category
        User.aggregate([{$group: {_id:"$Category",count: { $sum: 1 }}}])
        .then(result=>{
            finaldata["category"] =result; 
        }).then(()=>{
            // To find number of users who have given the test
            User.countDocuments(function (err, count) {
                if (err){
                }else{
                    finaldata["total"] = count;
                    res.send(finaldata);
                }
            })
        })
        
    })

    module.exports = demo;