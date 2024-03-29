//Imports
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express()
const router = require('./router')
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true}, () => console.log('mongo connected'))

//App setup
app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*'}))
router(app)

//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app)
server.listen(port);
console.log('server listening to on:', port)
