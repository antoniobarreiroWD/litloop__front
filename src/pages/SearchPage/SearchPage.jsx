import React, { useEffect, useCallback } from 'react';
import BookSearch from '.././../components/BookSearch/BookSearch';
import BookResults from '.././../components/BookResults/BookResults';
import useBookStore from '../../components/useStore';
import useThemeStore from '../../components/useThemeStore';
import AxiosConfig from '../../services/axios';


const axiosInstance = new AxiosConfig('books').axios;

const SearchPage = () => {
  const { books, totalPages, currentPage, searchQuery, loading, error, setBooks, setTotalPages, setCurrentPage, setLoading, setError } = useBookStore();
  const { darkMode } = useThemeStore();

  const fetchBooks = useCallback(async (query, page = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post('/search', { q: query, page });

      setBooks(response.data.books);
      setTotalPages(response.data.totalPages);
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
    <div className={`min-h-screen p-10 ${darkMode ? ' text-white' : ' text-gray-900'}`}>
      <h1 className="text-center text-3xl font-bold mb-10">Buscar Libros</h1>
      <div className="flex justify-center mb-10">
        <div className="w-full max-w-3xl">
          <BookSearch />
        </div>
      </div>
      
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      {searchQuery ? (
        <BookResults books={books} />
      ) : (
        <p className="text-center">Introduce un término de búsqueda para ver resultados.</p>
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

export default SearchPage;
