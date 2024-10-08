import React, { useState } from 'react';
import bookService from '../../services/Book.service'; 

const FavoriteButton = ({ bookId, isFavoriteInitial }) => {
  const [isFavorite, setIsFavorite] = useState(isFavoriteInitial || false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleFavorite = async () => {
    setLoading(true);
    setError(null);
    try {
      if (isFavorite) {
        
        await bookService.removeBookFromFavorites(bookId);
        setIsFavorite(false);
      } else {
       
        await bookService.addBookToFavorites(bookId);
        setIsFavorite(true);
      }
    } catch (err) {
      setError('Error updating favorite status');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={toggleFavorite}
        disabled={loading}
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {loading ? 'Loading...' : isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FavoriteButton;
