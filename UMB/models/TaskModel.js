const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    taskName: 
    {
         type: String,
          required: true 
        },
    projectId: 
    {
         type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    developers:
     [{
         type: mongoose.Schema.Types.ObjectId,
          ref: "User" 
        }],
    title:
     { 
        type: String 
    },
    description: 
    {
         type: String
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports=mongoose.model("Task", taskSchema);
