const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
   id:{
       type:Schema.Types.ObjectId
   },
   event_type:{
       type:String
   },
   event_title:{
       type:String
   },
   startdate:{
       type:Date
   },
   enddate:{
       type:Date
   },
  
   color:{
       type:String
   }
})

const Event = mongoose.model('event' , eventSchema)
module.exports = Event