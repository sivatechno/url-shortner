const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    // userid:{
    //     type:"String",
    //     required:true
    // },
    longurl:{
        type:"String",
        required:true,
        unique:true
    },
    shorturl:{
        type:"String",
        required:true,
        unique:true
        
    }

})
module.exports = mongoose.model("UrlData",urlSchema)