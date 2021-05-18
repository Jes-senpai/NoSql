const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Q1:{
        type : Object,
        require : true
    },
    Q2:{
        type : Object,
        require : true
    },
    Q3:{
        type : Object,
        require : true
    },
    Q4:{
        type : Object,
        require : true
    },
    Q5:{
        type : Object,
        require : true
    },
    Q6:{
        type : Object,
        require : true
    },
    Q7:{
        type : Object,
        require : true
    },
    Q8:{
        type : Object,
        require : true
    },
    Q9:{
        type : Object,
        require : true
    },
    Q10:{
        type : Object,
        require : true
    },
    Q11:{
        type : Object,
        require : true
    },
    Q12:{
        type : Object,
        require : true
    },
    Q13:{
        type : Object,
        require : true
    },
    Q14:{
        type : Object,
        require : true
    },
    Q15:{
        type : Object,
        require : true
    },
    Q16:{
        type : Object,
        require : true
    },
    Q17:{
        type : Object,
        require : true
    },
    Q18:{
        type : Object,
        require : true
    },
    Q19:{
        type : Object,
        require : true
    },
    Q20:{
        type : Object,
        require : true
    },
    IvsE:{
        type : Object,
        require : true
    },
    NvsS:{
        type : Object,
        require : true
    },
    TvsF:{
        type : Object,
        require : true
    },
    JvsP:{
        type : Object,
        require : true
    },
    Result:{
        type : Object,
        require : true
    },
    Category:{
        type : String,
        require : true
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;