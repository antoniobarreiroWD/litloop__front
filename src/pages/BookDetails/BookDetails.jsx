import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import DOMPurify from "dompurify";
import useBookDetailsStore from "../../components/useBookDetailsStore";
import useThemeStore from "../../components/useThemeStore";
import translateService from "../../services/Translate.service";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { book, fetchBookDetails, loading, error } = useBookDetailsStore();
  const { darkMode } = useThemeStore();
  const [originalDescription, setOriginalDescription] = useState("");
  const [translatedDescription, setTranslatedDescription] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [isTranslated, setIsTranslated] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBookDetails(id);
    return () => {
      useBookDetailsStore.getState().clearBookDetails();
    };
  }, [id, fetchBookDetails]);

  useEffect(() => {
    if (book?.volumeInfo?.description) {
      const sanitizedDescription = DOMPurify.sanitize(
        book.volumeInfo.description
      );
      setOriginalDescription(sanitizedDescription);
    }
  }, [book]);

  const handleShowDescription = () => {
    if (!isTranslated && !translatedDescription) {
      setIsTranslating(true);
      translateService
        .translateText(originalDescription, "es")
        .then((translatedText) => {
          setTranslatedDescription(translatedText);
          setIsTranslated(true);
        })
        .catch(() => {
          setTranslatedDescription(
            "Lo sentimos, hemos alcanzado el límite de traducciones. Mostrando el contenido original:"
          );
          setIsTranslated(false);
        })
        .finally(() => {
          setIsTranslating(false);
        });
    }
    setShowDescription(!showDescription);
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center min-h-screen"
      >
        <div
          className={`p-6 rounded-lg shadow-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
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
      <div className="container max-w-screen-lg mx-auto py-6 px-4 sm:px-8 mt-9">
        <div className="flex justify-between items-start mb-2">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Volver
          </button>
        </div>

        <div
          className={`p-4 rounded-lg flex flex-col items-center sm:flex-row sm:items-start border-2 ${
            darkMode ? "border-contrastText" : "border-gray-300"
          }`}
        >
          {volumeInfo?.imageLinks?.thumbnail && (
            <img
              src={volumeInfo.imageLinks.thumbnail}
              alt={`Portada de ${volumeInfo.title}`}
              className="w-32 h-48 sm:w-40 sm:h-60 md:w-56 md:h-80 object-cover mb-4 sm:mb-0 sm:mr-8 rounded"
            />
          )}

          <div className="flex-1">
            <h2
              className={`text-2xl md:text-3xl font-bold mb-2 text-center sm:text-left ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {volumeInfo?.title}
            </h2>
            {volumeInfo?.authors && (
              <p
                className={`text-center sm:text-left mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <strong>Autor(es):</strong> {volumeInfo.authors.join(", ")}
              </p>
            )}
            <p
              className={`text-center sm:text-left mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <strong>Editorial:</strong> {volumeInfo?.publisher}
            </p>
            <p
              className={`text-center sm:text-left mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <strong>Fecha de publicación:</strong> {volumeInfo?.publishedDate}
            </p>
            {translatedCategories.length > 0 && (
              <p
                className={`text-center sm:text-left mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <strong>Categorías:</strong> {translatedCategories.join(", ")}
              </p>
            )}

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                showDescription
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {showDescription && (
                <div
                  className={`mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: isTranslated
                      ? translatedDescription
                      : originalDescription,
                  }}
                />
              )}
            </motion.div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mt-4">
              <a
                href={volumeInfo?.infoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-4 rounded text-center"
              >
                Más Información
              </a>

              <button
                onClick={handleShowDescription}
                className={`py-2 px-4 rounded ${
                  darkMode
                    ? "bg-gray-700 text-gray-300"
                    : "bg-blue-700 text-gray-200"
                }`}
              >
                {isTranslating
                  ? "Traduciendo..."
                  : showDescription
                  ? "Ocultar Descripción"
                  : "Leer Descripción"}
              </button>

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
