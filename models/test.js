const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testSchema = new Schema({
    course_id: {
        type:String,
        
    },
    institute_id:{
        type:String,
       
    },
    test_id:{
      type:String  
    },
    test_type:{
      type:String  
    },
    teacher_id:{
      type:String  
    },
    test_name:{
      type:String  
    },
    num_qs:{
        type:Number
    },
    totalMarks:{
      type:String
    },
    time:{
      type:Number 
    }, 
    description:{
        type:String
    },
    deadline:{
        type:String
    },
    retest:{
        type:Number
    },
    colorHex:{
        type:String
    },
    colorBut:{
      type:String  
    }
})

const Test = mongoose.model('test' , testSchema)
module.exports = Test