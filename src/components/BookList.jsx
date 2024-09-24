import React from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const BookList = () => {
  const { data: books, error } = useSWR('http://localhost:3001/books/popular', fetcher);

  if (error) {
    return <p>Error al cargar los libros: {error.message}</p>;
  }

  if (!books) {
    return <p>Cargando...</p>; 
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <Link to={`/book/${book.id}`} key={book.id} className="block">
          <div className="bg-gradient-to-b from-gray-400 to-gray-100 dark:from-gray-600 dark:to-gray-800 p-4 rounded shadow-md flex flex-col items-center">
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={`Portada de ${book.volumeInfo.title}`}
                className="w-32 h-48 object-cover mb-4 rounded"
              />
            )}
            <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center">
              {book.volumeInfo.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {book.volumeInfo.authors?.join(', ')}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              {book.volumeInfo.publishedDate}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BookList;

