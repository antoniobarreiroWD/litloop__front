import React from "react";

const BookCard = ({ image, name, handleLike }) => {
  return (
    <div
      className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] rounded-3xl cursor-pointer bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
      onClick={handleLike}
    >
      <div className="absolute bottom-11 w-full flex justify-center items-center">
        <div className="flex justify-center items-center px-14 py-5 bg-white rounded-3xl">
          <p className="text-xl font-bold">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
