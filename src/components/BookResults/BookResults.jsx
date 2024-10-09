import React from 'react';
import useBookStore from '../useStore';
import useThemeStore from '../useThemeStore';
import BookCard from '../BookCard/BookCard';

const BookResults = () => {
  const { books } = useBookStore();
  const { darkMode } = useThemeStore();

  if (!books || books.length === 0) {
    return <p>No se encontraron libros.</p>;
  }

  return (
    <>
      <h2 className={`text-4xl font-bold text-center my-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Resultados de la búsqueda
      </h2>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 gap-7">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default BookResults;
