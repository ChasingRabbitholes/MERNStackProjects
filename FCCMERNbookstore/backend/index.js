import express from "express";
import cors from "cors";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
// Importing my bbooksRouter.js
import booksRouter from "./routers/booksRouter.js"; 


const app = express();
app.use(cors())
app.use(express.json());

//user booksRouter
app.use('/books', booksRouter);


app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Hello World');
});


/*  ****** Moved To booksRouter.js *******
//Route for saving a book
app.post('/books', async (req, res) => {
    const { title, author, description ,publishedYear} = req.body;

    if (!title || !author || !description|| !publishedYear) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const book = new Book({ title, author, description ,publishedYear});
        await book.save();
        return res.status(201).json(book);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

//Route for getting all books
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


//Route for getting a single book
app.get('/books/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
//Route for updating a book
app.put('/books/:id', async (req, res) => {
    const { id } = req.params;
    const { title, author, description , publishedYear } = req.body;

    try {
        const book = await Book.findByIdAndUpdate(
            id,
            { title, author, description , publishedYear },
            { new: true }
        );  
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }       
});
//Route for deleting a book
app.delete('/books/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}); */



mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("MongoDB is connected");
    app.listen(PORT, ()=>{
    console.log(`App is listening on port: ${PORT}`);
});
})
.catch((error)=>{
    console.log(error);
});