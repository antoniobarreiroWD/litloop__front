import React, { useState } from 'react';
import useBookStore from './useStore';
import useThemeStore from './useThemeStore'; 

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const { setSearchQuery, setCurrentPage } = useBookStore();
  const { darkMode } = useThemeStore(); 

  const handleSearch = () => {
    setSearchQuery(query);
    setCurrentPage(1); 
  };

  return (
    <div className={`search-container p-4 rounded-lg shadow-md ${darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-600 ' : 'bg-gradient-to-b from-gray-100 to-gray-400 '}`}>
      <div className="mb-4">
        <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
          Buscar por título o autor:
        </label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ej. Harry Potter, J.K. Rowling"
          className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
            darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'
          }`}
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Buscar
      </button>
    </div>
  );
};

export default BookSearch;
