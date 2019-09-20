const mongoose = require('mongoose')
const Schema = mongoose.Schema

const homeworkSchema = new Schema({
    course_id: {
        type:String,
        required:true
    },
    institute_id:{
        type:String,
        required:true
    },
    teacher_id:{
        type:String,
        required:true
    },
    module_id:{
        type:String,
        required:true
    },
    classs:{
        type:Number
    },
    description:{
        type:String
    },
    deadline:{
        type: Date
    },
    content:{
        type:String
    },
    title:{
        type:String,
        required:true
    }
})

const Homework = mongoose.model('homework' , homeworkSchema)
module.exports = Homework