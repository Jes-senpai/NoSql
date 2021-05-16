const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Q1:{
        type : String,
        require : true
    },
    Q2:{
        type : String,
        require : true
    },
    Q3:{
        type : String,
        require : true
    },
    Q4:{
        type : String,
        require : true
    },
    Q5:{
        type : String,
        require : true
    },
    Q6:{
        type : String,
        require : true
    },
    Q7:{
        type : String,
        require : true
    },
    Q8:{
        type : String,
        require : true
    },
    Q9:{
        type : String,
        require : true
    },
    Q10:{
        type : String,
        require : true
    },
    Q11:{
        type : String,
        require : true
    },
    Q12:{
        type : String,
        require : true
    },
    Q13:{
        type : String,
        require : true
    },
    Q14:{
        type : String,
        require : true
    },
    Q15:{
        type : String,
        require : true
    },
    Q16:{
        type : String,
        require : true
    },
    Q17:{
        type : String,
        require : true
    },
    Q18:{
        type : String,
        require : true
    },
    Q19:{
        type : String,
        require : true
    },
    Q20:{
        type : String,
        require : true
    },
    IvsE:{
        type : String,
        require : true
    },
    NvsS:{
        type : String,
        require : true
    },
    TvsF:{
        type : String,
        require : true
    },
    JvsP:{
        type : String,
        require : true
    },
    Result:{
        type : String,
        require : true
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;