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

router.get('/students/:institute_id' , (req,res)=> {
    Student.find({institute_id:req.params.institute_id}).then((students)=> {
        res.status(200).json(students)
    }).catch((err)=> {
         res.status(400).json(err)
    }) 
})

router.get('/teachers/:institute_id' , (req,res)=> {
       Teacher.find({institute_id:req.params.institute_id}).then((teachers)=> {
        res.status(200).json(teachers)
    }).catch((err)=> {
         res.status(400).json(err)
    })
})


router.get('/courses/:institute_id' , (req,res)=> {
       Course.find({institute_id:req.params.institute_id}).then((courses)=> {
        res.status(200).json(courses)
    }).catch((err)=> {
         res.status(400).json(err)
    })
})


router.get('/parents/:institute_id' , (req,res)=> {
       Parent.find({institute_id:req.params.institute_id}).then((parent)=> {
        res.status(200).json(parent)
    }).catch((err)=> {
         res.status(400).json(err)
    })
})


router.get('/calender/:institute_id' , (req,res)=> {
    Calander.find({institute_id:req.params.institute_id}).then((calander)=> {
        res.status(200).json(calander)
    }).catch((err)=> {
         res.status(400).json(err)
    })
})



router.get('/circular/:institute_id' , (req,res)=> {
    Circular.find({institute_id:req.params.institute_id}).then((circular)=> {
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
         color:req.body.color,
         circular_id:req.body.circular_id
     }
     new Circular(newCircular).save().then((newcircular)=> {
         res.status(200).json(newcircular)
     }).catch((err)=> res.status(400).json(err))
})

router.delete('/course/:institute_id/:course_id', (req,res) => {
       Course.remove({institute_id:req.params.institute_id,course_id:req.params.course_id})
       .then(() => {
           res.status(200).json({message:'course deleted!'})
       })
       .catch((err) => {
            res.status(400).json(err)
       })
})


router.delete('/student/:institute_id/:student_id', (req,res) => {
    Student.remove({institute_id:req.params.institute_id, student_id:req.params.student_id})
    .then(() => {
        res.status(200).json({message:'student deleted!'})
    })
    .catch((err) => {
         res.status(400).json(err)
    })
})


router.delete('/teacher/:institute_id/:teacher_id', (req,res) => {
    Teacher.remove({institute_id:req.params.institute_id, teacher_id:req.params.teacher_id})
    .then(() => {
        res.status(200).json({message:'teacher deleted!'})
    })
    .catch((err) => {
         res.status(400).json(err)
    })
})


router.delete('/parent/:institute_id/:parent_id', (req,res) => {
    Parent.remove({institute_id:req.params.institute_id,parent_id:req.params.parent_id})
    .then(() => {
        res.status(200).json({message:'parent deleted!'})
    })
    .catch((err) => {
         res.status(400).json(err)
    })
})


router.delete('/circular/:institute_id/:circular_id', (req,res) => {
    Circular.remove({institute_id:req.params.institute_id,circular_id:req.params.circular_id})
    .then(() => {
        res.status(200).json({message:'circular deleted!'})
    })
    .catch((err) => {
         res.status(400).json(err)
    })
})

router.put('/course/:institute_id/:course_id' , (req,res) => {
      Course.findOne({institute_id:req.params.institute_id,course_id:req.params.course_id})
      .then((course) => {
        course.course_id = req.body.course_id,
        course.institute_id = req.body.institute_id,
        course.course_name = req.body.course_name,
        course.classs = req.body.classs,
        course.course_desc = req.body.course_desc
        course.save()
        .then((editedcourse) => {
              res.status(200).json(editedcourse)
        })
        .catch((err) => {
               res.status(400).json(err)
        })
      })
      .catch((err) => {
            res.status(400).json(err)
      })
})


router.put('/course/:institute_id/:student_id' , (req,res) => {
    Student.findOne({institute_id:req.params.institute_id,student_id:req.params.student_id})
    .then((student) => {
        student.user_id = req.body.user_id,
         student.student_id = req.body.student_id,
         student.institute_id = req.body.institute_id,
         student.name = req.body.name,
         student.phone = req.body.phone,
         student.email = req.body.email,
         student.profile = req.body.profile,
         student.classs = req.body.classs,
         student.courses = req.body.course
      student.save()
      .then((editedstudent) => {
            res.status(200).json(editedstudent)
      })
      .catch((err) => {
             res.status(400).json(err)
      })
    })
    .catch((err) => {
          res.status(400).json(err)
    })
})


router.put('/course/:institute_id/:teacher_id' , (req,res) => {
    Teacher.findOne({institute_id:req.params.institute_id,teacher_id:req.params.teacher_id})
    .then((teacher) => {
        teacher.user_id = req.body.user_id,
        teacher.teacher_id = req.body.teacher_id,
        teacher.institute_id = req.body.institute_id,
        teacher.name = req.body.name,
        teacher.phone = req.body.phone,
        teacher.email = req.body.email,
        teacher.type = req.body.type
      teacher.save()
      .then((editedteacher) => {
            res.status(200).json(editedteacher)
      })
      .catch((err) => {
             res.status(400).json(err)
      })
    })
    .catch((err) => {
          res.status(400).json(err)
    })
})

router.put('/parent/:institute_id/:parent_id' , (req,res) => {
    Parent.findOne({institute_id:req.params.institute_id,parent_id:req.params.parent_id})
    .then((parent) => {
       parent.user_id=req.body.user_id,
       parent.parent_id=req.body.parent_id,
       parent.institute_id=req.body.institute_id,
       parent.student_id=req.body.student_id,
       parent.name=req.body.name,
       parent.phone=req.body.phone,
       parent.email=req.body.email,
       parent.profile=req.body.profile
       parent.save()
       .then((editedparent) => {
           res.status(200).json(editedparent)
       }).catch((err) => {
            res.status(400).json(err)
       })
    })
    .catch((err) => {
        res.status(404).json({msg:'not found!!'})
    })
})

router.put('/event/:institute_id/:event_id' , (req,res)=> {
    Event.findOne({institute_id:req.params.institute_id,event_id:req.params.event_id})
    .then((event) => {
     event.event_type=req.body.event_type,
     event.event_title=req.body.event_title,
     event.startdate=req.body.startdate,
     event.enddate=req.body.enddate,
     event.color=req.body.color
     event.save()
     .then((editedevent) => {
           res.status(200).json(editedevent)
     })
     .catch((err) => {
        res.status(400).json(err)
     })
    }).catch((err) => {
        res.status(404).json(err)
    })
})


module.exports = router