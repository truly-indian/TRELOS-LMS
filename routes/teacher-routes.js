const router = require('express').Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Course = require('../models/courses')
const Student = require('../models/students')
const Test = require('../models/test')
const Report = require('../models/report')
const Homework = require("../models/homework")
const Calander = require('../models/calender')
const Circular = require('../models/circular')
const Attendence = require('../models/attendence')

router.use(bodyParser.urlencoded({extended: false }))
router.use(bodyParser.json())

//--------------------get routes starts from here--------
router.get('/',(req,res)=> {
    res.status(200).json('This is the teacher page')
}) 

router.get('/students' , (req,res)=> {
    Student.find().then((students)=> {
        res.status(200).json(students)
    }).catch((err)=> {
         res.status(400).json(err)
    })
})

router.get('/tests' , (req,res)=> {
      Test.find().then((tests)=>{
          res.status(200).json(tests)
      }).catch((err)=>{
          res.status(400).json(err)
      })
})

router.get('/report' , (req,res)=> {
     Report.find().then((reports)=> {
         res.status(200).json(reports)
     }).catch((err)=> {
          res.status(400).json(err)
     })
})

router.get('/homework' , (req,res)=> {
     Homework.find().then((homework)=>{
         res.status(200).json(homework)
     }).catch((err)=>{
          res.status(400).json(err)
     })
})

router.get('/calander' , (req,res)=> {
     Calander.find().then((calander)=> {
         res.status(200).json(calander)
     }).catch((err)=> {
         res.status(400).json(err)
     })
})
router.get('/circular' , (req,res)=> {
     Circular.find().then((circular)=> {
         res.status(200).json(circular)
     }).catch((err)=> {
         res.status(400).json(err)
     })
})

router.get('/attendence' , (req,res)=> {
     Attendence.find().then((attendence)=> {
         res.status(200).json(attendence)
     }).catch((err)=> {
         res.status(400).json(err)
     })
})

//-----------------------------post methods starts from here----------------


router.post('/createtest', (req,res)=> {
     const newTest = {
         course_id:req.body.course_id,
         institute_id:req.body.institute_id,
         test_id:req.body.test_id,
         test_type:req.body.test_type,
         teacher_id:req.body.teacher_id,
         test_name:req.body.test_name,
         num_qs:req.body.num_qs,
         totalMarks:req.body.totalMarks,
         time:req.body.time,
         description:req.body.desc,
         deadline:req.body.deadline,
         retest:req.body.retest,
         
     }
     new Test(newTest).save().then((newtest)=> {
         res.status(200).json(newtest)
     }).catch((err)=> {
         res.status(400).json(err)
     })
})


router.post('/homework', (req,res)=> {
     const newHomework = {
         course_id:req.body.course_id,
         institute_id:req.body.institute_id,
         teacher_id:req.body.teacher_id,
         module_id:req.body.module,
         classs:req.body.class,
         description:req.body.desc,
         deadline:req.body.deadline,
         content:req.body.content,
         title:req.body.title
     }
     new Homework(newHomework).save().then((newhomework)=> {
         res.status(200).json(newhomework)
     }).catch((err)=> {
         res.status(400).json(err)
     })
})




module.exports = router