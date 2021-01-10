import React from 'react';
import './Row.css';

export const RowCenter: React.FC = ({ children }) => (
  <div className="row justify-content-center" >
    { children }
  </div>
);

const Row: React.FC = ({ children }) => (
  <div className="row" >
      { children }
  </div>
);
export default Row;



