const express = require('express')
var cors = require('cors')
const path = require("path");
const mongoose = require("mongoose");
const User = require("./Models/User");
const Character = require("./Models/Characters");
const characterRouter = require("./characterRoute")
const userRoute = require("./userRoute")
const addCharacterRouter = require("./addCharacterRoute");
const app = express();
require("dotenv").config({path :"./config.env"})
const port = process.env.PORT;
const dbURI = process.env.MONGOURI;
app.use(cors()); // to handle cross-origin errors
app.use(express.urlencoded({extended:true})); // to make sure that we are able to access the request body.
app.use(express.json()); 



mongoose.connect(dbURI,{useNewUrlParser: true,useUnifiedTopology: true})
.then((result)=>{
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}...`); // Server start;
    });
}).catch((err)=> console.log(err));
app.get("/",(req,res)=>{
    res.send("hi");
})
app.use('/character', characterRouter);
app.use("/user",userRoute);
app.use("/addCharacter",addCharacterRouter)


app.post('/adduser', function (req, res) {
    const data = req.body;
    const user = new User({
        Q1:data.Q1,Q2:data.Q2,Q3:data.Q3,Q4:data.Q4,Q5:data.Q5,Q6:data.Q6,Q7:data.Q7,Q8:data.Q8,Q9:data.Q9,Q10:data.Q10,Q11:data.Q11,Q12:data.Q12,Q13:data.Q13,Q14:data.Q14,Q15:data.Q15,Q16:data.Q16,Q17:data.Q17,Q18:data.Q18,Q19:data.Q19,Q20:data.Q20,IvsE:data.IvsE,NvsS:data.NvsS,TvsF:data.TvsF,JvsP:data.JvsP,Result: data.Result, Category: data.Q0.text
    })
    user.save()
    .then((result)=>{
        let q="";
        if(data.Q0.text!=="Both")
            q = {Type : data.Result.type, Category: data.Q0.text};
        else 
            q = {Type : data.Result.type};
        Character.find(q)
        .then((result)=>{
            res.send(result);
        })
    })
    console.log("in post request");
    
  })
  if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/react-app/build")))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"react-app","build","index.html"))
    })
}
