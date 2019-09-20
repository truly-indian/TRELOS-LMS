const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schoolSchema = new Schema({
  id:{
      type:Schema.Types.ObjectId
  },
  schoolName:{
      type:String
  },
  schoolId:{
      type:String
  }
})

const School = mongoose.model('school' , schoolSchema)
module.exports = School