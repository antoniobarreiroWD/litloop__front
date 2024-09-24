import React from 'react';

const SortOrder = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    const order = event.target.value;
    onSortChange(order); 
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
        Ordenar por:
      </label>
      <select
        onChange={handleSortChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Sin ordenar</option>
        <option value="newest">Más recientes</option>
        <option value="oldest">Más antiguos</option>
      </select>
    </div>
  );
};

export default SortOrder;
