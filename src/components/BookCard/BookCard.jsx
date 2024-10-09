import React from 'react';
import { Link } from 'react-router-dom';
import useThemeStore from '../useThemeStore';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const BookCard = ({ book, showDetails = true }) => {
  const { darkMode } = useThemeStore();

 
  const imageUrl = book.volumeInfo?.imageLinks?.thumbnail || 'ruta-de-imagen-predeterminada.jpg';
  const title = book.volumeInfo?.title || 'Título desconocido';
  const authors = book.volumeInfo?.authors?.join(', ') || 'Autor desconocido';
  const publishedDate = book.volumeInfo?.publishedDate || 'Fecha desconocida';

  return (
    <div
      className={`relative rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <Link to={`/book/${book.id}`}>
        <img
          src={imageUrl}
          alt={`Portada de ${title}`}
          className="w-full h-44 sm:h-56 md:h-96 xl:h-80 2xl:h-72 object-center"
        />
        <div
          className={`absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 ${
            darkMode ? 'text-white' : 'text-black'
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
      {showDetails && (
        <div className="absolute top-2 right-2">
          <FavoriteButton bookId={book.id} isFavoriteInitial={book.isFavorite || false} />
        </div>
      )}
    </div>
  );
};

export default BookCard;
