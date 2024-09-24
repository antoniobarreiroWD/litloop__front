import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import useBookDetailsStore from '../components/useBookDetailsStore'; 
import { motion } from 'framer-motion';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const { t } = useTranslation(); 
  const { book, fetchBookDetails, loading, error } = useBookDetailsStore(); 

  useEffect(() => {
    fetchBookDetails(id); 
    return () => {
      useBookDetailsStore.getState().clearBookDetails();
    };
  }, [id, fetchBookDetails]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center min-h-screen"
      >
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 dark:text-gray-300">Cargando detalles del libro...</p>
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

  const translatedCategories = volumeInfo.categories
    ? volumeInfo.categories.map((category) => t(category))
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 1, x: 0 }}    
      exit={{ opacity: 0, x: 100 }}      
      transition={{ duration: 0.5 }}     
      className="p-6 bg-white dark:bg-gray-900 rounded shadow-md"
    >
      <div className="container mx-auto py-10 px-4">
        <button
          onClick={() => navigate('/')} 
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        >
          Volver al Inicio
        </button>

        <div className="bg-gradient-to-b from-gray-400 to-gray-100 dark:from-gray-600 dark:to-gray-800 p-6 rounded shadow-md flex flex-col lg:flex-row items-center lg:items-start">
          {volumeInfo.imageLinks?.thumbnail && (
            <img
              src={volumeInfo.imageLinks.thumbnail}
              alt={`Portada de ${volumeInfo.title}`}
              className="w-48 h-64 object-cover mb-4 rounded lg:mr-8"
            />
          )}

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center lg:text-left">
              {volumeInfo.title}
            </h2>

            {volumeInfo.authors && (
              <p className="text-gray-600 dark:text-gray-300 mb-2 text-center lg:text-left">
                <strong>Autor(es):</strong> {volumeInfo.authors.join(', ')}
              </p>
            )}

            <p className="text-gray-600 dark:text-gray-300 mb-2 text-center lg:text-left">
              <strong>Editorial:</strong> {volumeInfo.publisher}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-center lg:text-left">
              <strong>Fecha de publicación:</strong> {volumeInfo.publishedDate}
            </p>

            {translatedCategories.length > 0 && (
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center lg:text-left">
                <strong>Categorías:</strong> {translatedCategories.join(', ')}
              </p>
            )}

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {volumeInfo.description ? (
                <span dangerouslySetInnerHTML={{ __html: volumeInfo.description }}></span>
              ) : (
                'Descripción no disponible.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
              <a
                href={volumeInfo.infoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-4 rounded mb-4 sm:mb-0 sm:mr-4 text-center"
              >
                Más Información
              </a>

              {accessInfo.webReaderLink && (
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
