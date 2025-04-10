import React from "react";

const DestinationCard = ({ destination }) => {
  const { name, location, image, description, price } = destination;

  return (
    <div className="card">
      <img src={image} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
      <h2>{name}</h2>
      <h4>{location}</h4>
      <p>{description}</p>
      <strong>{price}</strong>
    </div>
  );
};

export default DestinationCard;
