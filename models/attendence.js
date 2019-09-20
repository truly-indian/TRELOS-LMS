const mongoose = require('mongoose')
const Schema = mongoose.Schema

const attendenceSchema = new Schema({
    id:{
        type:Number
    },
    class:{
        type:Number
    },
    student_id:{
        type:String
    },
    user_id:{
        type:String
    },
    institute_id:{
        type:String
    },
    mark:{
        type:Number
    },
    date:{
        type:Date
    }
   
})

const Attendence = mongoose.model('attendence' , attendenceSchema)
module.exports = Attendence