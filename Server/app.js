const express = require('express')
var cors = require('cors')
const Character = require("./Models/Characters");
const mongoose = require("mongoose");
const User = require("./Models/User");
const data = require("./data");

const app = express();

app.use(cors()); // to handle cross-origin errors
app.use(express.urlencoded({extended:true})); // to make sure that we are able to access the request body.
app.use(express.json()); 

const dbURL = "mongodb+srv://user:user@clusterdev.59ggp.mongodb.net/Project?retryWrites=true&w=majority";

mongoose.connect(dbURL,{useNewUrlParser: true,useUnifiedTopology: true})
.then((result)=>{
    app.listen(3002,()=>{
        console.log("Server is running on port 3002..."); // Server start;
    });
}).catch((err)=> console.log(err));

// app.post('api/adduser', function(req,res){
//     // const data = req.body;
//     // const user = new User({
//     //     Q1:data.Q1,Q2:data.Q2,Q3:data.Q3,Q4:data.Q4,Q5:data.Q5,Q6:data.Q6,Q7:data.Q7,Q8:data.Q8,Q9:data.Q9,Q10:data.Q10,Q11:data.Q11,Q12:data.Q12,Q13:data.Q13,Q14:data.Q14,Q15:data.Q15,Q16:data.Q16,Q17:data.Q17,Q18:data.Q18,Q19:data.Q19,Q20:data.Q20,IvsE:data.IvsE,NvsS:data.NvsS,TvsF:data.TvsF,JvsP:data.JvsP,Result: data.Result
//     // })
//     // user.save()
//     // .then((result)=>{
//     //     res.send("Added to the DB")
//     // })
//     res.send("dghajs");
//     console.log("in post request");
// })
app.post('/adduser', function (req, res) {
    const data = req.body;
    const user = new User({
        Q1:data.Q1.text,Q2:data.Q2.text,Q3:data.Q3.text,Q4:data.Q4.text,Q5:data.Q5.text,Q6:data.Q6.text,Q7:data.Q7.text,Q8:data.Q8.text,Q9:data.Q9.text,Q10:data.Q10.text,Q11:data.Q11.text,Q12:data.Q12.text,Q13:data.Q13.text,Q14:data.Q14.text,Q15:data.Q15.text,Q16:data.Q16.text,Q17:data.Q17.text,Q18:data.Q18.text,Q19:data.Q19.text,Q20:data.Q20.text,IvsE:data.IvsE,NvsS:data.NvsS,TvsF:data.TvsF,JvsP:data.JvsP,Result: data.Result
    })
    user.save()
    .then((result)=>{
        var q = {Type : data.Result}
        Character.find(q)
        .then((result)=>{
            res.send(result);
        })
    })
    console.log("in post request");
    
  })
app.get("/",(req,res,next)=>{
    res.send("hi")
})
// app.get("/update",(req,res)=>{
//     let d=[];

// })
app.get("/aggregation",(req,res)=>{
    var finaldata={
        data:[],
        MarvelComics:[],
        DCComics:[],
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
    var q =[{ Type:"ISTP"},{ Type:"ISFJ"},{ Type:"ISFP"},{ Type:"ISTJ"},
            { Type:"INFJ"},{ Type:"INFP"},{ Type:"INTJ"},{ Type:"INTP"},
            { Type:"ESTP"},{ Type:"ESTJ"},{ Type:"ESFP"},{ Type:"ESFJ"},
            { Type:"ENFP"},{ Type:"ENFJ"},{ Type:"ENTP"},{ Type:"ENTJ"},];
        q.forEach((elem,index)=>{
            Character.countDocuments(elem, function (err, count) {
                if (err){
                    console.log(err)
                }else{
                    // console.log("Count :", count)
                    var val =count;
                    return val
                }
            })
            .then((result)=>{
                var v = {count : result, type: elem.Type}
                data.push(v)
                if(index===15){
                    finaldata["data"] = data;
                }
            })
            .catch(err=>console.log(err))
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
        // TO FIND NUMBER OF CHARATERS OF EACH AXIS in Marvel Comics
        var q3 =[{ Type:"ISTP", Category:"Marvel Comics"},{ Type:"ISFJ", Category:"Marvel Comics"},{ Type:"ISFP", Category:"Marvel Comics"},{ Type:"ISTJ", Category:"Marvel Comics"},
            { Type:"INFJ", Category:"Marvel Comics"},{ Type:"INFP", Category:"Marvel Comics"},{ Type:"INTJ", Category:"Marvel Comics"},{ Type:"INTP", Category:"Marvel Comics"},
            { Type:"ESTP", Category:"Marvel Comics"},{ Type:"ESTJ", Category:"Marvel Comics"},{ Type:"ESFP", Category:"Marvel Comics"},{ Type:"ESFJ", Category:"Marvel Comics"},
            { Type:"ENFP", Category:"Marvel Comics"},{ Type:"ENFJ", Category:"Marvel Comics"},{ Type:"ENTP", Category:"Marvel Comics"},{ Type:"ENTJ", Category:"Marvel Comics"},];
        var data1 =[]
            q3.forEach((elem,index)=>{
            Character.countDocuments(elem, function (err, count) {
                if (err){
                    console.log(err)
                }else{
                    // console.log("Count :", count)
                    var val =count;
                    return val
                }
            })
            .then((result)=>{
                var v = {count : result, type: elem.Type}
                data1.push(v)
                if(index===15){
                    finaldata["MarvelComics"] = data1;
                }
            })
            .catch(err=>console.log(err))
        })
        // DC COMICS--------------------------------------------------------------------------------------------
        var q5 =[{ Type:"ISTP", Category:"DC Comics"},{ Type:"ISFJ", Category:"DC Comics"},{ Type:"ISFP", Category:"DC Comics"},{ Type:"ISTJ", Category:"DC Comics"},
        { Type:"INFJ", Category:"DC Comics"},{ Type:"INFP", Category:"DC Comics"},{ Type:"INTJ", Category:"DC Comics"},{ Type:"INTP", Category:"DC Comics"},
        { Type:"ESTP", Category:"DC Comics"},{ Type:"ESTJ", Category:"DC Comics"},{ Type:"ESFP", Category:"DC Comics"},{ Type:"ESFJ", Category:"DC Comics"},
        { Type:"ENFP", Category:"DC Comics"},{ Type:"ENFJ", Category:"DC Comics"},{ Type:"ENTP", Category:"DC Comics"},{ Type:"ENTJ", Category:"DC Comics"},];
        var data3 =[]
        q5.forEach((elem,index)=>{
            Character.countDocuments(elem, function (err, count) {
                if (err){
                    console.log(err)
                }else{
                    // console.log("Count :", count)
                    var val =count;
                    return val
                }
            })
            .then((result)=>{
                var v = {count : result, type: elem.Type}
                data3.push(v)
                if(index===15){
                    finaldata["DCComics"] = data3;
                }
            })
            .catch(err=>console.log(err))
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
app.get("/addData",(req,res)=>{
    var c = data
    console.log(c.length);
    c.forEach(item =>{
        const cha = new Character(item);
        cha.save()
    })
    res.send("done");        
})
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    res.render('error');
  });


