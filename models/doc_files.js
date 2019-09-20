const mongoose = require('mongoose')
const Schema = mongoose.Schema

const doc_fileSchema = new Schema({
   id:{
       type:Schema.Types.ObjectId
   },
   chapter_id:{
       type:String
   },
   file_id:{
       type:String
   },
   course_id:{
       type:String
   },
   teacher_id:{
       type:String
   },
   fileName:{
       type:String
   },
   fileDescription:{
       type:String
   },

   colorHex:{
       type:String
   },
   colorBut:{
    type:String
   },
   filepath:{
       type:String
   },
   upload:{
       type:String
   },
   lastMod:{
       type:String
   }

})

const DocFile = mongoose.model('docFile' , doc_fileSchema)
module.exports = DocFile