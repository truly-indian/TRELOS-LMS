const mongoose = require("mongoose")
const Schema = mongoose.Schema

const parentSchema = new Schema({
    id:{
       type:Schema.Types.ObjectId
   },
   user_id:{
       type:String
   },
   parent_id:{
       type:String
   },
   institute_id:{
       type:String
   },
   student_id:{
       type:String
   },
   name:{
       Type:String
   },
   phone:{
       Type:String
   },
   email:{
       Type:String
   },
   profile:{
       Type:String
   }
})

const Parent = mongoose.model('parent' , parentSchema)

module.exports = Parent