import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";
import useThemeStore from '../useThemeStore'; 

const ShowFavoriteBooks = () => {
    const { user } = useContext(AuthContext);
    const { favoriteBooks } = user || {}; 
    const { darkMode } = useThemeStore(); 
    const [booksData, setBooksData] = useState([]);
    const [loading, setLoading] = useState(true);

    
    const fetchBookData = async (bookId) => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        
        const fetchFavoriteBooksData = async () => {
            try {
                setLoading(true);
                const booksInfo = await Promise.all(
                    favoriteBooks.map((book) => fetchBookData(book.bookId))
                );
                setBooksData(booksInfo);
            } catch (error) {
                console.error('Error fetching book data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (favoriteBooks && favoriteBooks.length > 0) {
            fetchFavoriteBooksData();
        } else {
            setLoading(false);
        }
    }, [favoriteBooks]);

    if (loading) {
        return <p>Cargando libros favoritos...</p>;
    }

    if (!booksData || booksData.length === 0) {
        return <p>No tienes libros favoritos aún.</p>;
    }

    return (
        <>
        <div className={`font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <h2 className="text-4xl font-bold m-20">
                Tus Libros Favoritos
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {booksData.map((book) => (
                <Link to={`/book/${book.id}`} key={book.id} className="block">
                    <div className={`p-4 rounded flex flex-col items-center ${
                        darkMode ? 'bg-gradient-to-b from-third via-[#67328a] to-third' : 'bg-gradient-to-b from-[#f3f4f6] via-primary to-[#f3f4f6]'
                    }`}>
                        {book.volumeInfo?.imageLinks?.thumbnail && (
                            <img
                                src={book.volumeInfo.imageLinks.thumbnail}
                                alt={`Portada de ${book.volumeInfo.title}`}
                                className="w-32 h-48 object-cover mb-4 rounded"
                            />
                        )}
                        <h3 className={`text-lg font-bold text-center min-h-[4rem] flex items-start justify-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {book.volumeInfo.title}
                        </h3>
                        <p className={`text-center mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {book.volumeInfo.authors?.join(', ')}
                        </p>
                        <p className={`text-sm text-center mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {book.volumeInfo.publishedDate}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
        </>
    );
};

export default ShowFavoriteBooks;

