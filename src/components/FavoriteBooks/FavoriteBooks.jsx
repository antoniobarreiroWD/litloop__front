import React from "react";
import Title from "../Title/Title";
import BooksGrid from "../BooksGrid/BooksGrid";

const FavoriteBooks = ({ favoriteBooks }) => {
  return (
    <div className="flex flex-col gap-20">
      <Title fontSize="32px">These are your Favorite books:</Title>
      <BooksGrid books={favoriteBooks} />
    </div>
  );
};

export default FavoriteBooks;
