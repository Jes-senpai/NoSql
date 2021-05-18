const express = require('express');
const mongoose = require('mongoose');
const demo = express.Router();
const Character = require("./Models/Characters");
demo.route("/")
.get((req,res)=>{
        var finaldata={
            data:[],
            total:"",
            total_Marvel:"",
            total_DC:"",
            I_Total:0,
            E_Total:0,
            S_Total:0,
            N_Total:0,
            T_Total:0,
            F_Total:0,
            J_Total:0,
            P_Total:0,
            I_Marvel:0,
            E_Marvel:0,
            S_Marvel:0,
            N_Marvel:0,
            T_Marvel:0,
            F_Marvel:0,
            J_Marvel:0,
            P_Marvel:0,
            I_DC:0,
            E_DC:0,
            S_DC:0,
            N_DC:0,
            T_DC:0,
            F_DC:0,
            J_DC:0,
            P_DC:0,
        }
        Character.countDocuments(function (err, count) {
            if (err){
                console.log(err)
            }else{
                finaldata["total"] = count;
            }
        })
        Character.countDocuments({Category :"Marvel Comics"},function (err, count) {
            if (err){
                console.log(err)
            }else{
                finaldata["total_Marvel"] = count;
            }
        })
        Character.countDocuments({Category :"DC Comics"},function (err, count) {
            if (err){
                console.log(err)
            }else{
                finaldata["total_DC"] = count;
            }
        })
        // --------------To FIND NUMBER OF CHARACTERS IN EACH PERSONALITY TYPE---------------
        var data = [];
        Character.aggregate([{$group: {_id:"$Type",count: { $sum: 1 }}}])
        .then(result=>{
            finaldata["data"] =result; 
        })
        Character.aggregate([{ $match : { Category : "Marvel Comics" } },{$group: {_id:"$Type",count: { $sum: 1 }}}])
        .then(result=>{
            finaldata["MarvelComics"] =result; 
        })
        Character.aggregate([{ $match : { Category : "DC Comics" } },{$group: {_id:"$Type",count: { $sum: 1 }}}])
        .then(result=>{
            finaldata["DCComics"] =result; 
        })
            // TO FIND NUMBER OF CHARATERS OF EACH AXIS
            var q2 =[{type:"I_Total",regex:/I/},{type:"E_Total",regex:/E/},{type:"N_Total",regex:/N/},{type:"S_Total",regex:/S/},{type:"J_Total",regex:/J/},{type:"F_Total",regex:/F/},{type:"T_Total",regex:/T/},{type:"P_Total",regex:/P/}]
            q2.forEach((elem,index)=>{
                Character.countDocuments({Type: elem.regex},(err, count)=> {
                    if (err){
                        console.log(err)
                    }else{
                        // console.log("Count of N :", count)
                        var val =count;
                        return val
                    }
                }).then((result)=>{
                    finaldata[elem.type] = result;
                }).catch(err=> console.log(err));
            })
            
            // Regex Marvel------------------------------------------------------------
            var q4 =[{type:"I_Marvel",regex:/I/},{type:"E_Marvel",regex:/E/},{type:"N_Marvel",regex:/N/},{type:"S_Marvel",regex:/S/},{type:"J_Marvel",regex:/J/},{type:"F_Marvel",regex:/F/},{type:"T_Marvel",regex:/T/},{type:"P_Marvel",regex:/P/}]
            q4.forEach((elem,index)=>{
                Character.countDocuments({Type: elem.regex, Category : "Marvel Comics"},(err, count)=> {
                    if (err){
                        console.log(err)
                    }else{
                        // console.log("Count of N :", count)
                        var val =count;
                        return val
                    }
                }).then((result)=>{
                    finaldata[elem.type] = result;
                }).catch(err=> console.log(err));
            })
            //Regex DC------------------------------------------------------
            var q6 =[{type:"I_DC",regex:/I/},{type:"E_DC",regex:/E/},{type:"N_DC",regex:/N/},{type:"S_DC",regex:/S/},{type:"J_DC",regex:/J/},{type:"F_DC",regex:/F/},{type:"T_DC",regex:/T/},{type:"P_DC",regex:/P/}]
            q6.forEach((elem,index)=>{
                Character.countDocuments({Type: elem.regex, Category : "Marvel Comics"},(err, count)=> {
                    if (err){
                        console.log(err)
                    }else{
                        // console.log("Count of N :", count)
                        var val =count;
                        return val
                    }
                }).then((result)=>{
                    finaldata[elem.type] = result;
                    if(index===7)
                            res.send(finaldata);
                }).catch(err=> console.log(err));
            })
         })
 
module.exports= demo;