import React from "react";
import Title from "../Title/Title";
import BooksGrid from "../BooksGrid/BooksGrid";

const FavoriteBooks = ({ favoriteBooks }) => {
  return (
    <div className="flex flex-col gap-8 mt-10">
     
      <Title className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Estos son tus libros favoritos:</Title>
      <BooksGrid books={favoriteBooks} />
    </div>
  );
};

export default FavoriteBooks;
