import React, { useEffect, useCallback } from 'react';
import BookSearch from '../BookSearch/BookSearch';
import BookResults from '../BookResults/BookResults';
import BookList from '../BookList/BookList';  
import useBookStore from '../useStore';
import useThemeStore from '../useThemeStore';

const BookPage = () => {
  const { books, totalPages, currentPage, searchQuery, loading, error, setBooks, setTotalPages, setCurrentPage, setLoading, setError } = useBookStore();
  const { darkMode } = useThemeStore();

  const fetchBooks = useCallback(async (query, page = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/books/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ q: query, page }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      setBooks(data.books);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError('Error al realizar la búsqueda');
    }

    setLoading(false);
  }, [setBooks, setTotalPages, setLoading, setError]);

  useEffect(() => {
    if (searchQuery) {
      fetchBooks(searchQuery, currentPage);
    }
  }, [searchQuery, currentPage, fetchBooks]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`font-bold mt-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        <h2 className="text-2xl font-bold mt-6">
          Los más populares últimamente
        </h2>
        <div className="mt-4 w-full flex justify-center">
          <BookSearch />
        </div>
      </div>
      
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      {searchQuery ? (
        <BookResults books={books} />
      ) : (
        <BookList />
      )}

      {totalPages > 1 && searchQuery && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`mx-1 px-3 py-2 rounded ${
                i + 1 === currentPage
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookPage;
