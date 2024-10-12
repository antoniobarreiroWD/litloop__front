import React from 'react';
import useSWR from 'swr';
import useThemeStore from '../useThemeStore';
import BookCard from '../BookCard/BookCard';
import AxiosConfig from '../../services/axios'; 


const axiosInstance = new AxiosConfig('books').axios;

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

const BookList = () => {
  
  const { data: books, error } = useSWR('/popular', fetcher);
  const { darkMode } = useThemeStore();

  if (error) {
    return <p>Error al cargar los libros: {error.message}</p>;
  }

  if (!books) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <h2 className={`text-4xl font-bold text-center m-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Los más populares últimamente
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 gap-7">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default BookList;
