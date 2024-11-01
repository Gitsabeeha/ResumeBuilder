const mongoose=require('mongoose')
const { type } = require('os')

const resumeSchema=new mongoose.Schema({
   personalDetail: {
       fullName:{type:String,require:true},
       address: {type:String ,require:true},
       phoneNo:{type:Number,require:true},
       emailAddress:{type:String,require:true},
       dob:{type:String,require:true},
       linkdin:{type:String},
      website:{type:String},
      photo:{type:String}
    },
    Education: [
        {
          course: { type: String, required: true },
          University: { type: String, required: true },
          Grade: { type: String, required: true },
          year: { type: String, required: true }
        }
      ],
Experience:[
  {
   CompanyName:{type:String,require:true},
  jobTitle:{type:String,require:true},
  StartDate:{type:String,require:true},
  EndDate:{type:String,require:true},
 Description:{type:String,require:true}
}],
Skill:[{
userSkill:{type:String,require:true}
}],
  Objective: {
    objectiver: { type: String, required:false}
},

  Project:[{
    title:{type:String,require:true},
    detail:{type:String,require:true}
  }],
  Achievment:{
    achievment:{type:String,require:true}
     },
  Language:{
      language:{type:String,require:true}
       },
  AdditionalInfo:{
    additionalInfo:{type:String,require:true}
         },
})
const User = mongoose.model('User', resumeSchema)
module.exports = User;