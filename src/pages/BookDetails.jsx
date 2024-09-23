import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const { t } = useTranslation(); 
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error('Error fetching book details:', error));
  }, [id]);

  if (!book) {
    return <div>Cargando detalles del libro...</div>;
  }

  const { volumeInfo, accessInfo } = book;

  
  const translatedCategories = volumeInfo.categories
    ? volumeInfo.categories.map((category) => t(category))
    : [];

  return (
    <div className="container mx-auto py-10 px-4">
      <button
        onClick={() => navigate('/')} 
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Volver al Inicio
      </button>

      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md flex flex-col lg:flex-row items-center lg:items-start">
       
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
  );
};

export default BookDetails;
