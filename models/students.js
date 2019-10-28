const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
   id:{
       type:Schema.Types.ObjectId
   },
   user_id:{
       type:String
   },
   student_id:{
       type:String
   },
   institute_id:{
       type:String
   },
   name:{
       type:String
   },
   phone:{
       type:String
   },
   email:{
       type:String
   },
   profile:{
       type:String
   },
   classs:{
    type:String
    },
    courses:{
        type:String
    }
})

const Student = mongoose.model('student' , studentSchema)
module.exports = Student