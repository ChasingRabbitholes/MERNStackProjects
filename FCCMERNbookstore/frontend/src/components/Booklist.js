import React from "react";


// BookList.js
// This component will display a list of books
function BookList({ books}){
    if (!books.length) return <p>No books found.</p>;
    return (
        <ul>
            {books.map(book => (
                <li key={book._id}>{book.title} by {book.author}</li>
            ))}
        </ul>
    );
}

export default BookList;