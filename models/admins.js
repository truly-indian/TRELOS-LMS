const mongoose = require("mongoose")
const Schema = mongoose.Schema

const adminSchema = new Schema({
    id:{
       type:Schema.Types.ObjectId
   },
   username:{
       type:String,
       required:true
   },
   password:{
       type:String,
       required:true
   },
   role:{
       type:String,
       default:'ADMIN'
   }
   
})

const Admin = mongoose.model('admin' , adminSchema)

module.exports = Admin