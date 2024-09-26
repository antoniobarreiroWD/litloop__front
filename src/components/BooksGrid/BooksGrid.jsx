import React from "react";
import BookCard from "./BookCard";
import CustomLink from "./CustomLink";

const BooksGrid = ({ books }) => {
  const handleLike = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {books.map(({ name, _id, image }) => (
        <CustomLink key={_id} to={`/books/${_id}`}>
          <BookCard key={_id} name={name} image={image} handleLike={handleLike} />
        </CustomLink>
      ))}
    </div>
  );
};

export default BooksGrid;
