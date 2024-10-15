import React from 'react';
import { Link } from 'react-router-dom';
import useThemeStore from '../useThemeStore';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { useAuth } from '../../contexts/AuthContext'; 

const BookCard = ({ book, showDetails = true }) => {
  const { darkMode } = useThemeStore();
  const { currentUser } = useAuth();

  const imageUrl = book.volumeInfo?.imageLinks?.thumbnail || 'ruta-de-imagen-predeterminada.jpg';
  const title = book.volumeInfo?.title || 'Título desconocido';
  const authors = book.volumeInfo?.authors?.join(', ') || 'Autor desconocido';
  const publishedDate = book.volumeInfo?.publishedDate || 'Fecha desconocida';

  return (
    <div
      className={`relative rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 border-2 ${
        darkMode ? 'border-contrastText' : 'border-gray-300'
      }`}
      style={{ width: '100%', height: 'auto' }}
    >
      <Link to={`/book/${book.id}`}>
        <div className="w-full h-56 sm:h-72 md:h-80 bg-transparent relative flex items-center justify-center "> 
          <img
            src={imageUrl}
            alt={`Portada de ${title}`}
            className="object-contain max-w-full max-h-full"
            onError={(e) => {
              e.target.src = 'ruta-de-imagen-predeterminada.jpg';
            }}
          />
        </div>
        <div
          className={`absolute inset-0 flex flex-col justify-end p-4 ${
            darkMode 
              ? 'bg-gradient-to-t from-black to-transparent' 
              : 'bg-gradient-to-b from-transparent to-gray-200'
          } opacity-0 hover:opacity-100 transition-opacity duration-300 ${
            darkMode ? 'text-contrastText' : 'text-black'
          }`}
        >
          <h3 className="font-bold text-lg sm:text-xl">{title}</h3>
          {showDetails && (
            <>
              <p className="text-sm">{authors}</p>
              <p className="text-xs">{publishedDate}</p>
            </>
          )}
        </div>
      </Link>
      {showDetails && currentUser && (
        <div className="absolute top-2 right-2">
          <FavoriteButton bookId={book.id} isFavoriteInitial={book.isFavorite || false} />
        </div>
      )}
    </div>
  );
};

export default BookCard;



