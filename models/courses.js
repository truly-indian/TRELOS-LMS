const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    course_id: {
        type:String,
        required:true
    },
    institute_id:{
        type:String,
        required:true
    },
    course_name:{
        type:String
    },
    classs:{
        type:Number
    },
    course_desc:{
        type:String
    }
})

const Course = mongoose.model('course' , courseSchema)
module.exports = Course