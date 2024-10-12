import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../contexts/AuthContext";
import useThemeStore from '../useThemeStore'; 
import BookCard from '../BookCard/BookCard'; 

const ShowFavoriteBooks = () => {
  const { user } = useContext(AuthContext); 
  const { darkMode } = useThemeStore(); 
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookData = async (bookId) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching book data:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchFavoriteBooksData = async () => {
      if (!user || !user.favoriteBooks || user.favoriteBooks.length === 0) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null); 
        const booksInfo = await Promise.all(
          user.favoriteBooks.map((book) => fetchBookData(book.bookId))
        );
        
       
      

        setBooksData(booksInfo);
      } catch (error) {
        setError('No se pudieron cargar los libros favoritos. Inténtalo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteBooksData();
  }, [user]); 

  if (!user) {
    return <p>No has iniciado sesión.</p>; 
  }

  if (loading) {
    return <p>Cargando libros favoritos...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!booksData || booksData.length === 0) {
    return <p>No tienes libros favoritos aún.</p>;
  }

  return (
    <>
      <div className={`font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      </div>
        <h2 className="text-4xl font-bold m-20 text-center">Tus Libros Favoritos</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 gap-7">
        {booksData.map((book) => (
          <BookCard key={book.id} book={book} showDetails={true} />
        ))}
      </div>
    </>
  );
};

export default ShowFavoriteBooks;
