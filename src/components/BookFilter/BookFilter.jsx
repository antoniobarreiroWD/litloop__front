import React from 'react';
import useFilterStore from '../useFilterStore';

const BookFilter = () => {
  const { query, category, year, setQuery, setCategory, setYear, setFilters } = useFilterStore();

  const handleFilter = () => {
    setFilters({ query, category, year });
  };

  return (
    <div className="filter-container p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Buscar por título o autor:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ej. Harry Potter, J.K. Rowling"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Categoría:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Ej. Fiction"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Año de Publicación:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Ej. 2020"
        />
      </div>
      <button
        onClick={handleFilter}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Aplicar Filtros
      </button>
    </div>
  );
};

export default BookFilter;
