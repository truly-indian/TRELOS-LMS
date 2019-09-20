const mongoose = require('mongoose')
const Schema = mongoose.Schema

const calenderSchema = new Schema({
   id:{
       type:Schema.Types.ObjectId
   },
   insid:{
       type:String
   },
   title:{
       type:String
   },
   start:{
       type:Date
   },
   end:{
       type:Date
   },
   description:{
       type:String
   },
   color:{
       type:String
   },
   type:{
       type:String
   },
   image:{
       type:String
   }
})

const Calender = mongoose.model('calender' , calenderSchema)
module.exports = Calender