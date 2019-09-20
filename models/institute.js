const mongoose = require('mongoose')
const Schema = mongoose.Schema

const instituteSchema = new Schema({
   id:{
       type:Schema.Types.ObjectId
   },
   instituteName:{
       type:String
   },
   institute_id:{
       type:String
   },
   instituteType:{
       type:String
   },
   email:{
       type:String
   },
   phone:{
       type:String
   },
   logo:{
       type:String
   },
   token:{
       type:String
   },
   dateTime:{
    type:Date
}
})

const Institute = mongoose.model('institute' , instituteSchema)
module.exports = Institute