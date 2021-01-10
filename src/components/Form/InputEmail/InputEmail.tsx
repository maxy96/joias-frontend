import React from 'react';
import './InputEmail.css';

interface InjectedProps{
  label: string;
  onChange: any;
  name: string;
}

const InputEmail: React.FC<InjectedProps> = ({label, onChange, name}) => (
  <div className="form-group row">
    <label className="col-md-2 col-form-label text-md-right">{ label }</label>
    <div className="col-md-10">
      <input type="email" className="form-control" name={ name } onChange={ onChange } required />
    </div>
  </div>
);

export default InputEmail;
