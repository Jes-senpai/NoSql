const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    Name:{
        type : String,
        require : true
    },
    Type:{
        type : String,
        require : true
    },
    ImgUrl:{
        type : String,
        require : true
    },
    Category: {
        type : String,
        require : true
    }
});

const Character = mongoose.model("Character", characterSchema);
module.exports = Character;