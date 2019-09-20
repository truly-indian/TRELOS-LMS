const router = require('express').Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Course = require('../models/courses')
const Student = require('../models/students')
const Teacher = require('../models/teachers')
const Parent = require('../models/parent')
const Calander = require('../models/calender')
const Circular = require('../models/circular')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

//get methods starts from here----------

router.get('/',(req,res)=> {
    res.status(200).json('This is the institute page')
}) 

router.get('/students' , (req,res)=> {
    Student.find().then((students)=> {
        res.status(200).json(students)
    }).catch((err)=> {
         res.status(400).json(err)
    })
})

router.get('/teachers' , (req,res)=> {
       Teacher.find().then((teachers)=> {
        res.status(200).json(teachers)
    }).catch((err)=> {
         res.status(400).json(err)
    })
})


router.get('/courses' , (req,res)=> {
       Course.find().then((courses)=> {
        res.status(200).json(courses)
    }).catch((err)=> {
         res.status(400).json(err)
    })
})


router.get('/parents' , (req,res)=> {
       Parent.find().then((parent)=> {
        res.status(200).json(parent)
    }).catch((err)=> {
         res.status(400).json(err)
    })
})


router.get('/calender' , (req,res)=> {
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

//post methods starts---- from here------

router.post('/addcourse' , (req,res)=> {
     const newCourse = {
         course_id:req.body.course_id,
         institute_id:req.body.institute_id,
         course_name:req.body.course_name,
         classs:req.body.classs,
         course_desc:req.body.course_desc
     }
     new Course(newCourse).save().then((newcourse)=> {
         res.status(200).json(newcourse)
     }).catch((err)=> {
          res.status(400).json(err)
     })
})

router.post('/addstudent' , (req,res)=> {
     const newStudent = {
         user_id:req.body.user_id,
         student_id:req.body.student_id,
         institute_id:req.body.institute_id,
         name:req.body.name,
         phone:req.body.phone,
         email:req.body.email,
         profile:req.body.profile,
         classs:req.body.classs,
         courses:req.body.course
     }
     
     new Student(newStudent).save().then((newstudent)=> {
         res.status(200).json(newstudent)
     }).catch((err)=>{
         res.status(400).json(err)
     })
})


router.post('/addteacher', (req,res)=> {
       const newTeacher = {
           user_id:req.body.user_id,
           teacher_id:req.body.teacher_id,
           institute_id:req.body.institute_id,
           name:req.body.name,
           phone:req.body.phone,
           email:req.body.email,
           type:req.body.type
       }
       
       new Teacher(newTeacher).save().then((newteacher)=> {
           res.status(200).json(newteacher)
       }).catch((err)=> {
           res.status(200).json(err)
       })
})

router.post('/addparent', (req,res)=> {
      const newParent = {
          user_id:req.body.user_id,
          parent_id:req.body.parent_id,
          institute_id:req.body.institute_id,
          student_id:req.body.student_id,
          name:req.body.name,
          phone:req.body.phone,
          email:req.body.email,
          profile:req.body.profile
          
      }
      new Parent(newParent).save().then((newparent)=> {
           res.status(200).json(newparent)
      }).catch((err)=> {
          res.status(400).json(err)
      })
})


router.post('/addcircular' , (req,res)=> {
     const newCircular = {
         institute_id:req.body.institute_id,
         title:req.body.title,
         text:req.body.text,
         startDate:req.body.startDate,
         endDate:req.body.endDate,
         chapterDescription:req.body.desc,
         color:req.body.color
     }
     new Circular(newCircular).save().then((newcircular)=> {
         res.status(200).json(newcircular)
     }).catch((err)=> res.status(400).json(err))
})



module.exports = router