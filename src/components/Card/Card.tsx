import React from 'react';
import './Card.css';

const Card: React.FC = ({ children }) => (
  <div className="card border-0 shadow-pink">
    <div className="card-body px-5">
      { children }
    </div>
  </div>
);

export default Card;
