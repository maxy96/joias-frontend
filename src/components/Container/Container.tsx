import React from 'react';
import './Container.css';

const Container: React.FC = ({children}) => (
  <div className="container my-4">
    {children}
  </div>
);

export default Container;
