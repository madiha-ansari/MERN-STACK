import React from "react";
import Card from "./Card";
import "./Card.css"; 

const CardsContainer = () => {
  const cardsData = [
    { title: "Card 1", description: "This is the first card", image: "/download.jpg" },
    { title: "Card 2", description: "This is the second card", image: "/download.jpg" },
    { title: "Card 3", description: "This is the third card", image: "/download.jpg" },
    { title: "Card 4", description: "This is the fourth card", image: "/download.jpg" },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} image={card.image} />
      ))}
    </div>
  );
};

export default CardsContainer;
