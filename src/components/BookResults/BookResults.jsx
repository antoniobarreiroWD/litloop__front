import React from 'react';
import { Link } from 'react-router-dom';
import useBookStore from '../useStore';
import useThemeStore from '../useThemeStore';

const BookResults = () => {
  const { books } = useBookStore();
  const { darkMode } = useThemeStore();

  if (!books || books.length === 0) {
    return <p>No se encontraron libros.</p>;
  }

  return (
<>
  <h2 className={`text-4xl font-bold m-20 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
    Resultados de la búsqueda
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {books.map((book) => (
      <Link to={`/book/${book.id}`} key={book.id} className="block">
        <div className={`p-4 rounded flex flex-col items-center ${
          darkMode ? 'bg-gradient-to-b from-third via-gray-600 to-third' : 'bg-gradient-to-b from-gray-100 via-gray-400 to-gray-100'
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

export default BookResults;
