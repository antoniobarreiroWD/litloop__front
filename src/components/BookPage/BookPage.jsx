import React, { useEffect, useCallback, useState } from 'react';
import BookSearch from '../BookSearch/BookSearch';
import BookResults from '../BookResults/BookResults';
import BookList from '../BookList/BookList';  
import useBookStore from '../useStore';
import useThemeStore from '../useThemeStore';
import { FaSearch, FaTimes } from 'react-icons/fa'; 
import AxiosConfig from '../../utils/AxiosConfig'; 

const axiosInstance = new AxiosConfig('books').axios; 

const BookPage = () => {
  const { books, totalPages, currentPage, searchQuery, loading, error, setBooks, setTotalPages, setCurrentPage, setLoading, setError } = useBookStore();
  const { darkMode } = useThemeStore();
  const [showSearch, setShowSearch] = useState(false); 

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
  }, [axiosInstance, setBooks, setTotalPages, setLoading, setError]);

  useEffect(() => {
    if (searchQuery) {
      fetchBooks(searchQuery, currentPage);
    }
  }, [searchQuery, currentPage, fetchBooks]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev); 
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`font-bold mt-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        
        <div className="mt-4 w-full flex justify-center">
          <button onClick={toggleSearch} className="text-2xl p-2 focus:outline-none z-50">
            {showSearch ? <FaTimes className='text-red-700' /> : <FaSearch className={`${darkMode ? 'text-white':'text-black'}`} />}
          </button>
        </div>

        {showSearch && (
          <div className="mt-4 w-full flex justify-center">
            <BookSearch />
          </div>
        )}
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
