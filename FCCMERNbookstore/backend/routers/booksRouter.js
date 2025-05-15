import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Get all books
router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// Get a single book
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id.trim());
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// Create a book
router.post("/", async (req, res) => {
    const { title, author, description, publishedYear } = req.body;
    if (!title || !author || !description || !publishedYear) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const book = new Book({ title, author, description, publishedYear });
        await book.save();
        return res.status(201).json(book);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// Update a book
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, author, description, publishedYear } = req.body;
    try {
        const book = await Book.findByIdAndUpdate(
            id.trim(),
            { title, author, description, publishedYear },
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

// Delete a book
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByIdAndDelete(id.trim());
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

export default router;