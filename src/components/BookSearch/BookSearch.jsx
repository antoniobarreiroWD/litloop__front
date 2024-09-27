import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import useBookStore from '../useStore';
import useThemeStore from '../useThemeStore'; 

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const { setSearchQuery, setCurrentPage } = useBookStore();
  const { darkMode } = useThemeStore(); 

  const handleSearch = () => {
    setSearchQuery(query);
    setCurrentPage(1); 
  };

  return (
    <div className={`relative transform ${darkMode ? 'bg-gradient-to-b from-secondary via-[#f07de885] to-third' : 'bg-gradient-to-b from-[#42E9E4] via-[#42e9e367] to-gray-100'} 
  w-full p-2 rounded `}>

      <div className="flex flex-col mb-4">
        <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
          Buscar por título o autor:
        </label>
        <div className="flex w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ej. Harry Potter, J.K. Rowling"
            className={`shadow appearance-none border rounded-l w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-700'}`}
          />
          <button
            onClick={handleSearch}
            className="bg-[#112d55] hover:bg-[#1f3c88] text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline flex items-center justify-center"
          >
            <FaSearch className="w-5 h-5" /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookSearch;

