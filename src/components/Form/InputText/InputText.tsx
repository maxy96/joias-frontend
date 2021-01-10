import React from 'react';
import './InputText.css';

interface InjectedProps{
  label: string;
  onChange: any;
  name: string;
}

const InputText: React.FC<InjectedProps> = ({label, onChange, name}) => (
  <div className="form-group row">
      <label className="col-md-2 col-form-label text-md-right">{ label }</label>
      <div className="col-md-10">
        <input type="text" name={ name } className="form-control" onChange={ onChange } required/>
      </div>
  </div>
);

export default InputText;
