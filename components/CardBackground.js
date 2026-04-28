'use client';
import { useEffect, useState } from 'react';

export default function CardBackground() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch 18 cards from a new deck
    const fetchCards = async () => {
      try {
        const res = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=18');
        const data = await res.json();
        if (data.cards) {
          setCards(data.cards);
        }
      } catch (error) {
        console.error("Failed to fetch cards:", error);
      }
    };

    fetchCards();
  }, []);

  // Positions for the cards (CSS classes c1-c18 matched from globals.css)
  const positions = [
    'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 
    'c9', 'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 
    'c16', 'c17', 'c18'
  ];

  if (cards.length === 0) return null; // Don't show anything until loaded

  return (
    <div className="cards-background">
      {cards.map((card, index) => {
        const posClass = positions[index % positions.length];
        
        return (
          <div key={card.code} className={`floating-card-img ${posClass}`}>
            <img 
              src={card.image} 
              alt={`${card.value} of ${card.suit}`} 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        );
      })}
    </div>
  );
}