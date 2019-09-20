const mongoose = require('mongoose')
const Schema = mongoose.Schema

const assignementsubmissionSchema = new Schema({
    assignement_id: {
        type:String,
        required:true
    },
    assignementType:{
        type:String
    },
    institute_id:{
        type:String,
        required:true
    },
    teacher_id:{
        type:String
    },
    user_id:{
        type:String
    },
    studentName:{
        type:String
    },
    student_id:{
        type:String
    },
    date:{
        type:Date
    },
    lateSubmission:{
        type:String
    },
    answer:{
        type:String
    }
})

const Assignement_submission = mongoose.model('assignementSubmission' , assignementsubmissionSchema)
module.exports = Assignement_submission