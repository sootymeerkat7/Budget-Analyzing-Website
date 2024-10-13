const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://SanskarKejriwal:Sanskar15%40@cluster0.xgjsyoc.mongodb.net/MyMoney' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))