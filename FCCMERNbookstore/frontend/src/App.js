import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/Booklist';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5555/books')
      .then(res => setBooks(res.data)) 
      .catch(err => console.error(err)); 
      },[]);
  // Fetch books from the backend API
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bookstore</h1>
        <BookList books={books} />
        
      </header>
    </div>
  );
}

export default App;
