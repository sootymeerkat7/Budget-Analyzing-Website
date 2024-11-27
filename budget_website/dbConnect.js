const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://abc:abc@cluster0.ueffold.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))
