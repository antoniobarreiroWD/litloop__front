import React from 'react';
import BookList from '../components/BookList';

const Home = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        -Últimos libros publicados-
      </h2>
      <BookList />
    </div>
  );
};

export default Home;
