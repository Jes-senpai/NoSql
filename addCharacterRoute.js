const express = require('express');
const mongoose = require('mongoose');
const demo = express.Router();
const data = require("./data");
const Character = require("./Models/Characters");
demo.route("/")
.get((req,res)=>{
        var c = data
        console.log(c.length);
        c.forEach(item =>{
            const cha = new Character(item);
            cha.save()
        })
        res.send("done");        
    })
module.exports = demo;
