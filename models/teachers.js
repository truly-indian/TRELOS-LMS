const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teacherSchema = new Schema({
   id:{
       type:Schema.Types.ObjectId
   },
   user_id:{
       type:String
   },
   teacher_id:{
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
   type:{
       type:String
   }
})

const Teacher = mongoose.model('teacher' , teacherSchema)
module.exports = Teacher