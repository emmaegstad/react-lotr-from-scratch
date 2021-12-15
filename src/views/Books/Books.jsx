import './Books.css';
import { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/books';
import BookList from '../../components/BookList';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Books in the Series</h1>
      <div className="Books">
        {books.map((book) => {
          return <BookList key={book.id} {...book} />;
        })}
      </div>
    </>
  );
}
