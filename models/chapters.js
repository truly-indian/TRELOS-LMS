const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chapterSchema = new Schema({
   id:{
       type:Schema.Types.ObjectId
   },
   chapter_id:{
       type:String
   },
   desig:{
       type:Number
   },
   course_id:{
       type:String
   },
   chapterName:{
       type:String
   },
   class:{
       type:String
   },
   chapterDescription:{
       type:String
   },
   colorHex:{
       type:String
   },
   colorBut:{
    type:String
}
})

const Chapter = mongoose.model('chapter' , chapterSchema)
module.exports = Chapter