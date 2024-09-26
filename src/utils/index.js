import React from "react";
import StarIcon from "../components/StarIcon/StarIcon";

export const capitalizeText = (text) => {
  const parsedText = text.split("_").join(" ");
  const capitalizedFirstLetter = parsedText[0].toUpperCase();
  return `${capitalizedFirstLetter}${parsedText.slice(1)}`;
};

export const getReviewsAverage = (reviews) => {
  if (!reviews.length) return "";
  let sum = 0;
  for (const { rating } of reviews) {
    sum += rating;
  }
  const averageReview = Math.floor(sum / reviews.length);
  const iterations = [];
  for (let i = 0; i < averageReview; i++) iterations.push("");

  return (
    <div className="flex">
      {iterations.map((_, index) => {
        return <StarIcon key={index} />;
      })}
    </div>
  );
};

export const getbookDetails = (
  name,
  neighborhood,
  address,
  cuisine_type,
  operating_hours,
  location,
  reviews
) => {
  return [
    { name: "Name", content: name },
    { name: "Neighborhood", content: neighborhood },
    { name: "Address", content: address },
    { name: "Cuisine type", content: cuisine_type },
    { name: "Operating hours", content: operating_hours },
    { name: "Location: ", content: location.coordinates.join(" ") },
    { name: "Reviews: ", content: getReviewsAverage(reviews) },
  ];
};
