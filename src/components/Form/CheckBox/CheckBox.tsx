import React from 'react';
import './CheckBox.css';

interface InjectedProps{
  label: string;
  onChange: any;
  name: string;
}

const CheckBox: React.FC<InjectedProps> = ({label, onChange, name}) => (
  <div className="form-check form-check-inline my-1">
    <input className="form-check-input" name={ name } onChange={ onChange } type="checkbox" required/>
    <label className="form-check-label" >{ label }</label>
  </div>
);

export default CheckBox;
