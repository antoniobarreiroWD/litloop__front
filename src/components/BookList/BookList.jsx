import React from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import useThemeStore from '../useThemeStore'; 

const fetcher = (url) => fetch(url).then((res) => res.json());

const BookList = () => {
  const { data: books, error } = useSWR('http://localhost:3001/api/books/popular', fetcher);
  const { darkMode } = useThemeStore(); 

  
  if (error) {
    return <p>Error al cargar los libros: {error.message}</p>;
  }

 
  if (!books) {
    return <p>Cargando...</p>; 
  }

  
  if (!Array.isArray(books)) {
    return <p>Error: La respuesta no es un listado de libros válido.</p>;
  }

  return (
    <>
      <h2 className={`text-2xl font-bold mb-4 mt-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Los más populares últimamente
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id} className="block">
            <div className={`p-4 rounded flex flex-col items-center  ${
              darkMode ? 'bg-gradient-to-b from-third via-[#67328a] to-third' : 'bg-gradient-to-b from-[#f3f4f6] via-primary to-[#f3f4f6]'
            }`}>
              {book.volumeInfo.imageLinks?.thumbnail && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={`Portada de ${book.volumeInfo.title}`}
                  className="w-32 h-48 object-cover mb-4 rounded"
                />
              )}
              <h3 className={`text-lg font-bold text-center min-h-[4rem] flex items-start justify-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {book.volumeInfo.title}
              </h3>
              <p className={`text-center mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {book.volumeInfo.authors?.join(', ')}
              </p>
              <p className={`text-sm text-center mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {book.volumeInfo.publishedDate}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BookList;
