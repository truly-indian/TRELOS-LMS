const mongoose = require('mongoose')
const Schema = mongoose.Schema

const circularSchema = new Schema({
   id:{
       type:Schema.Types.ObjectId
   },
   institute_id:{
       type:String
   },
   title:{
       type:String
   },
   text:{
       type:String
   },
   startDate:{
       type:Date
   },
   endDate:{
       type:Date
   },
   chapterDescription:{
       type:String
   },
   color:{
       type:String
   },
   circular_id:{
       type:String
   }
   
})

const Circular = mongoose.model('circular' , circularSchema)
module.exports = Circular