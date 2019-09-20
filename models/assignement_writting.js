const mongoose = require('mongoose')
const Schema = mongoose.Schema

const assignementwrittingSchema = new Schema({
    assignement_id: {
        type:String,
        required:true
    },
    institute_id:{
        type:String,
        required:true
    },
    teacher_name:{
        type:String
    },
    teacher_id:{
        type:String
    },
    class:{
        type:Number
    },
    course_id:{
        type:String
    },
    course_name:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    assignement_type:{
        type:String
    },
    date:{
        type:Date
    },
    deadline:{
        type:Date
    },
    question:{
        type:String
    },
    wordLimit:{
        type:Number
    }
})

const Assignement_writting = mongoose.model('assignementWritting' , assignementwrittingSchema)
module.exports = Assignement_writting