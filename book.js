const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/booksData');

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String
});

const bookModel = mongoose.model('book', bookSchema);

function seedBookData() {
    const book1 = new bookModel({
        title: 'Book 1 title',
        description: 'Book 1 description',
        status: ' Book 1 status',
        email: 'omar.qb8077@gmail.com'
    })
    const book2 = new bookModel({
        title: 'Book 2 title',
        description: 'Book 2 description',
        status: ' Book 2 status',
        email: 'omar.qb8077@gmail.com'
    })
    const book3 = new bookModel({
        title: 'Book 3 title',
        description: 'Book 3 description',
        status: ' Book 3 status',
        email: 'omar.qb8077@gmail.com'
    })

    book1.save();
    book2.save();
    book3.save();
}

seedBookData();

// localhost:3001/books
function getBookRouter(req,res){
    bookModel.find({},(error,data) => {
        if(error) {
            console.log('error in getting data',error);
        } else {
            // console.log(data)
            res.send(data);
        }
    })
}

module.exports = getBookRouter;