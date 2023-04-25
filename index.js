const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
require('dotenv').config()
const authRouter = require('./routers/auth')
const imageRouter = require('./routers/image')
const foodRouter = require('./routers/food')

mongoose.connect('mongodb://127.0.0.1:27017/project_manager_picture',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log('Connect mongodb success'))
    .catch(error=>{
        console.log('Connect fail')
    })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


app.use('/images', express.static(path.join(__dirname, "/images")))

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
  })
   
  var upload = multer({ storage: storage })

app.post('/api/upload', upload.single("file"), (req,res)=> {
    res.status(200).json('Upload image success')
})

app.use('/api/auth',authRouter)
app.use('/api/image',imageRouter)
app.use('/api/food',foodRouter)


app.listen(3000,(req,res)=>{
    console.log('Server on running port 3000')
})