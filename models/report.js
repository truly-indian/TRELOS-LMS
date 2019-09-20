const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reportSchema = new Schema({
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
    class:{
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

const Report = mongoose.model('report' , reportSchema)
module.exports = Report