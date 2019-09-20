const router = require('express').Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Course = require('../models/courses')
const Institute = require('../models/institute')
const Student = require('../models/students')
const Teacher = require('../models/teachers')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/',(req,res)=> {
    res.status(200).json('This is the admins page')
}) 

router.get('/institutes',(req,res)=> {
    Institute.find().then((institutes)=>{
        res.status(200).json(institutes)
    }).catch((err)=> {
        res.status(400).json(err)
    })
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

//post methods starts from here=------------

router.post('/addinstitute' , (req,res)=> {
    console.log(req.body)
     const newInstitute = {
         instituteName: req.body.instituteName,
         instituteType: req.body.instituteType,
         institute_id: req.body.institute_id,
         email:req.body.email,
         phone:req.body.phone,
         dateTime:Date.now()
     }
     new Institute(newInstitute).save()
     .then((instituteSaved) => {
         res.status(200).json(instituteSaved)
     })
     .catch((err)=> res.status(400).json(err))
})


router.delete('/:id' , (req,res) => {
  Institute.remove({
    _id:req.params.id
  })
  .then(() => {
    res.redirect('/')
  })
})


module.exports = router