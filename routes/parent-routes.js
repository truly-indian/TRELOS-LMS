const router = require('express').Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Course = require('../models/courses')


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.get('/',(req,res)=> {
    res.status(200).json('This is the parent page')
}) 


module.exports = router