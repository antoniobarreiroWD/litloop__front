import React, { useState, useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; 
import { AuthContext } from '../../contexts/AuthContext'; 
import bookService from '../../services/Book.service'; 

const FavoriteButton = ({ bookId }) => {
  const { user, updateFavoriteBooks } = useContext(AuthContext); 
  const [isFavorite, setIsFavorite] = useState(user?.favoriteBooks?.some(fav => fav.bookId === bookId) || false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleFavorite = async () => {
    setLoading(true);
    setError(null);
    try {
      let updatedFavorites;
      if (isFavorite) {
        await bookService.removeBookFromFavorites(bookId);
        updatedFavorites = user.favoriteBooks.filter(fav => fav.bookId !== bookId);
        setIsFavorite(false);
      } else {
        await bookService.addBookToFavorites(bookId);
        updatedFavorites = [...user.favoriteBooks, { bookId }];
        setIsFavorite(true);
      }
      updateFavoriteBooks(updatedFavorites); 
    } catch (err) {
      setError('Error updating favorite status');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleFavorite}
        disabled={loading}
        className="p-2 text-red-500 hover:text-red-600 focus:outline-none bg-white rounded-full shadow-md"
      >
        {loading ? (
          '...'
        ) : isFavorite ? (
          <FaHeart className="w-6 h-6" /> 
        ) : (
          <FaRegHeart className="w-6 h-6" /> 
        )}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FavoriteButton;
