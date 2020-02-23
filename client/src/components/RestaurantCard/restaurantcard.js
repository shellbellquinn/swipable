import React from "react";
import "./restaurantcard.css";


function RestaurantCard( {name, image, rating, price, link }) {
  return (
    <div className="user-card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
      <div className="content">
        <ul>
          <li>
          <a href={link}> {name} Website </a>
          </li>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Rating:</strong> {rating} <strong> Price:</strong> {price}
          </li>
        </ul>
      </div>
{/* //add in buttons */}
    </div>
  );
}

export default RestaurantCard;
