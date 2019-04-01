const express = require('express')
const app = express()
const todoRoute = require('./routes/todo')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/public',express.static(__dirname + '/public'))
app.use('/todos',todoRoute)

app.listen(9876)