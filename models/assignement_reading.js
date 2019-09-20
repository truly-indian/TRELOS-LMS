const mongoose = require('mongoose')
const Schema = mongoose.Schema

const assignementreadingSchema = new Schema({
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
    course_id:{
        type:String
    },
    course_name:{
        type:String
    },
    class:{
        type:Number
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
    content:{
        type:String
    },
    question:{
        type:String
    },
    answer:{
        type:String
    }
})

const Assignement_reading = mongoose.model('assignementReading' , assignementreadingSchema)
module.exports = Assignement_reading