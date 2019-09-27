const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const adminRoutes = require('./routes/admin-routes')
const studentRoutes = require('./routes/student-routes')
const teacherRoutes = require('./routes/teacher-routes')
const instituteRoutes = require('./routes/institute-routes')
const parentRoutes = require('./routes/parent-routes')
const exphbs = require('express-handlebars')
const path = require('path')
const cors = require('cors')
const methodOverride = require('method-override')
const app = express()

mongoose.connect(keys.mongodb.dbURI,{ useUnifiedTopology: true,useNewUrlParser: true}).then(()=>{console.log('connected!!')}).catch((err)=>{console.log(err)})

const SERVER_PORT = process.env.PORT || 3000
app.use(express.static(path.join(__dirname , 'public')))

app.use(methodOverride('_method'))

app.engine('handlebars' , exphbs({
    defaultLayout:'main'
}))

app.set('view engine' , 'handlebars')
app.use(cors())

app.use((req,res,next)=>{
           res.header('Acess-Controll-Allow-Origin','*')
           res.header('Acess-controll-Allow-headers','Origin, X-Requested-With,Content-Type,Accept,Authorization')
           if(req.method === 'OPTIONS'){
           res.header('Acess-Controll-Allow-Method','PUT,POST,PATCH,DELETE,GET')
           return res.status(200).json({})
           }
           next()
  })

app.get('/' , (req,res)=> {
     res.render('forms/addinstitute')
})




app.use('/admin',adminRoutes)
app.use('/teacher',teacherRoutes)
app.use('/student',studentRoutes)
app.use('/institute' , instituteRoutes)
app.use('/parent' , parentRoutes)

app.listen(SERVER_PORT,()=> {
    console.log('server started at port:' + SERVER_PORT)
})
