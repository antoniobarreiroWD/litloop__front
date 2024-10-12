import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import { motion } from 'framer-motion';
import useBookDetailsStore from '../../components/useBookDetailsStore'; 
import useThemeStore from '../../components/useThemeStore';
import { translateText } from '../../services/translateService'; 

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const { t } = useTranslation(); 
  const { book, fetchBookDetails, loading, error } = useBookDetailsStore(); 
  const { darkMode } = useThemeStore(); 
  const [translatedDescription, setTranslatedDescription] = useState('');

  
  useEffect(() => {
    fetchBookDetails(id); 
    return () => {
      useBookDetailsStore.getState().clearBookDetails();
    };
  }, [id, fetchBookDetails]);

  
  useEffect(() => {
    if (book?.volumeInfo?.description) {
      translateText(book.volumeInfo.description, 'es')
        .then((translatedText) => {
          setTranslatedDescription(translatedText);
        })
        .catch((err) => {
          console.error('Error al traducir la descripción:', err);
          setTranslatedDescription(book.volumeInfo.description); 
        });
    }
  }, [book]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center min-h-screen"
      >
        <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Cargando detalles del libro...
          </p>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center min-h-screen"
      >
        <div className="p-6 bg-red-500 text-white rounded-lg shadow-lg">
          <p>Error al cargar los detalles del libro: {error}</p>
        </div>
      </motion.div>
    );
  }

  if (!book) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center min-h-screen"
      >
        <div className="p-6 bg-yellow-500 text-white rounded-lg shadow-lg">
          <p>No se encontraron detalles del libro.</p>
        </div>
      </motion.div>
    );
  }

  const { volumeInfo, accessInfo } = book;

  const translatedCategories = volumeInfo?.categories
    ? volumeInfo.categories.map((category) => t(category))
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 1, x: 0 }}    
      exit={{ opacity: 0, x: 100 }}      
      transition={{ duration: 0.5 }}     
    >
      <div className="container max-w-screen-lg mx-auto py-6 px-4 sm:px-8">
        <button
          onClick={() => navigate('/')} 
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        >
          Volver al Inicio
        </button>

        <div className={`p-4 rounded-lg flex flex-col items-center sm:flex-row sm:items-start ${
              darkMode ? 'bg-gradient-to-b from-third via-[#67328a] to-third' : 'bg-gradient-to-b from-[#f3f4f6] via-primary to-[#f3f4f6]'
            }`}>
              {volumeInfo?.imageLinks?.thumbnail && (
                <img
                  src={volumeInfo.imageLinks.thumbnail}
                  alt={`Portada de ${volumeInfo.title}`}
                  className="w-32 h-48 sm:w-40 sm:h-60 md:w-56 md:h-80 object-cover mb-4 sm:mb-0 sm:mr-8 rounded"
                />
          )}

          <div className="flex-1">
            <h2 className={`text-2xl md:text-3xl font-bold mb-2 text-center sm:text-left ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {volumeInfo?.title}
            </h2>

            {volumeInfo?.authors && (
              <p className={`text-center sm:text-left mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <strong>Autor(es):</strong> {volumeInfo.authors.join(', ')}
              </p>
            )}

            <p className={`text-center sm:text-left mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <strong>Editorial:</strong> {volumeInfo?.publisher}
            </p>
            <p className={`text-center sm:text-left mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <strong>Fecha de publicación:</strong> {volumeInfo?.publishedDate}
            </p>

            {translatedCategories.length > 0 && (
              <p className={`text-center sm:text-left mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <strong>Categorías:</strong> {translatedCategories.join(', ')}
              </p>
            )}

            <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
             
              <div dangerouslySetInnerHTML={{ __html: translatedDescription || volumeInfo?.description }} />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
              <a
                href={volumeInfo?.infoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-4 rounded mb-4 sm:mb-0 sm:mr-4 text-center"
              >
                Más Información
              </a>

              {accessInfo?.webReaderLink && (
                <a
                  href={accessInfo.webReaderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white py-2 px-4 rounded text-center"
                >
                  Leer en Google Books
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookDetails;
