'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();



const server = express();
server.use(cors());
const PORT = process.env.PORT;


const getBookRouter = require('./book');
server.get('/books',getBookRouter)

server.get('/', homeHandler);


function homeHandler(req, res) {
    res.send('Everything is good')
 }

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})