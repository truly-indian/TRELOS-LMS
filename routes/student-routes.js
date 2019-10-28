const router = require('express').Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Course = require('../models/courses')
const Homework = require('../models/homework')
const Circular = require("../models/circular")
const Attendence = require('../models/attendence')
const Calander = require('../models/calender')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.get('/',(req,res)=> {
    res.status(200).json('This is the student page')
}) 

router.get('/courses/:institute_id/:class' , (req,res)=> {
    Course.find().then((courses)=> {
        res.status(200).json(courses)
    }).catch((err)=> {
         res.status(400).json(err)
    })
})

router.get('/homework' , (req,res)=> {
    Homework.find().then((homework)=> {
        res.status(200).json(homework)
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


router.get('/calender' , (req,res)=> {
    Calander.find().then((calander)=> {
        res.status(200).json(calander)
    }).catch((err)=> {
         res.status(400).json(err)
    })
})



module.exports = router