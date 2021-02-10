const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/users');
const taskRouter = require('./routers/tasks')

//const Task = require('./models/task');

const app = express()
const port = process.env.PORT ; 

// app.use((req,res,next) => {
//     res.status(503).send('Server is under Maintainence..Try back soon!!!!')
// })

// const multer = require('multer');
// const upload = multer({
//     dest : 'images',
//     limits : {
//         fileSize : 1000000
//     },
//     fileFilter(req, file, cb){
//         if(!file.originalname.match(/\.(doc|docx)$/))
//         {
//             return cb(new Error('Please upload a Word Document.'))
//         }
//         cb(undefined , true);
//     }
// })

// app.post('/upload', upload.single('upload') ,(req,res) => {
//     res.send();
// },(error, req,res,next) =>{
//     res.status(400).send({error : error.message})
// })

app.use(express.json())
app.use(userRouter);
app.use(taskRouter);

app.listen(port , () => {
    console.log('Server is up and running on port: ' + port);
})