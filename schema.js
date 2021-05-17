const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({

    task:{type:String ,unique:true},
    description:{type:String},
    deadline:{type:Date},
    isCompleted:{type:Boolean},
    priority:{type:String},

});

module.exports = mongoose.model("Todo", todoSchema);




// task, description, deadline, 
// isCompleted, and priority