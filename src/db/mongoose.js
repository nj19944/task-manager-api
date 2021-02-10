const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser : true,
    useCreateIndex: true
})

// const User = mongoose.model('User' , {
//     name : {
//         type : String,
//         required : true,
//         trim : true
//     },
//     email : {
//         type : String,
//         required : true,
//         trim : true,
//         lowercase : true,
//         validate(value){
//             if(!validator.isEmail(value))
//             {
//                 throw new Error('Email is invalid!!')
//             }
//         }
//     },
//     password : {
//         type : String,
//         required : true,
//         trim : true,
//         minlength : 7,
//         validate(value) {
//             if(value.toLowerCase().includes('password')){
//                 throw new Error ('Password cannot contain password')
//             }
//         }
//     },
//     age : {
//         type : Number,
//         default : 0,
//         validate(value){
//             if(value < 0)
//             {
//                 throw new Error('Age must be greater than 0')
//             }
//         }
//     }
// })

// const me = new User({
//     name : '  shubham   ',
//     email: 'sh@gmail.com',
//     password : 'shubham122'
// })


// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log(error);
// })

// const Task = mongoose.model('Task', {
//     description : {
//         type : String,
//         required : true,
//         trim : true
//     },
//     completed : {
//         type : Boolean,
//         default : false
//     }
// })

// const requiredTask = new Task({
//     description : 'eat lunch'
// })

// requiredTask.save().then(() => {
//     console.log(requiredTask);
// }).catch(error => {
//     console.log(error);
// })