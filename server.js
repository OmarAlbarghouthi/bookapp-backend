'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const getBookRouter = require('./book');


const server = express();
server.use(cors());
const PORT = process.env.PORT;



server.get('/books',getBookRouter)

server.get('/', homeHandler);

server.post('/addBooks',addBookHandler)
server.delete('/deleteBooks',removeBookHandler)

async function addBookHandler(req,res){
    let {  email ,title, description,status } = req.body;
    console.log(req.body);
    await bookModel.create({
       email,
       title,
       description,
       status
    })
    await bookModel.find({email:email}, function(error,bookData){
        if(error){console.log('error in getting data ' , error);}
        else{
            console.log(email);
            res.send(bookData) 
        
        }
    })
}
function removeBookHandler(req, res) {
    let bookID = req.query.bookID;
    let email = req.query.email;
    bookModel.deleteOne({ _id: bookID }).then(() => {
        bookModel.find({email:email}, function(error,bookData){
            if(error){console.log('error in getting data ' , error);}
            else{res.send(bookData)}
        })
    })
}

function homeHandler(req, res) {
    res.send('Everything is good')
 }

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})