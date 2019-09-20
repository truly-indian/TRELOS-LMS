const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imgSchema = new Schema({
   id:{
       type:Schema.Types.ObjectId
   },
   chapter_id:{
       type:String
   },
   file_id:{
       type:String
   },
  fileName:{
       type:Number
   },
   course_id:{
       type:String
   },
   teacher_id:{
       type:String
   },
   fileExt:{
       type:String
   },
   fileDescription:{
       type:String
   },
   filePath:{
    type:String
    },
    upload:{
        type:String
    },
    last_mod:{
        type:String
    }
})

const Image = mongoose.model('image' , imageSchema)
module.exports = Image