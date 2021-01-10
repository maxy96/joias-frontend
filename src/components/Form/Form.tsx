import React, { useState } from 'react';
import Persona from '../../models/persona';
import { ColMd12 } from '../Col/Col';
import Row from '../Row/Row';
import CheckBox from './CheckBox/CheckBox';
import './Form.css';
import InputEmail from './InputEmail/InputEmail';
import InputText from './InputText/InputText';

interface PersonState{
  nombre: string;
  apellido: string;
  email:string;
  tyc: boolean;
  mayorDeEdad: boolean;
}


// sin uso de props
const Form: React.FC = () => {

  const [persona, setPersona] = useState<PersonState>({
    nombre: '',
    apellido: '',
    email: '',
    tyc: false,
    mayorDeEdad: false
  });

  const handleInput = (e: { target: HTMLInputElement}) => {
    setPersona({...persona,
      [e.target.name]: e.target.value
    });
  }

  const handleCheckbox = (e: { target: HTMLInputElement}) => {
    setPersona({...persona,
      [e.target.name]: e.target.checked
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cliente = new Persona(persona.nombre, persona.apellido, persona.email);
    cliente.enviarWpp();
  }

    return(
      <form onSubmit={ handleSubmit }>
        <Row>
          <ColMd12>
            <InputText label="Nombre" name="nombre" onChange={ handleInput }></InputText>
          </ColMd12>
          <ColMd12>
            <InputText label="Apellido" name="apellido" onChange={ handleInput }></InputText>
          </ColMd12>
          <ColMd12>
            <InputEmail label="Email" name="email" onChange={ handleInput }></InputEmail>
          </ColMd12>
          <ColMd12>
            <CheckBox label="Acepto los terminos y condiciones" name="tyc" onChange={ handleCheckbox }></CheckBox>
          </ColMd12>
          <ColMd12>
            <CheckBox label="Soy mayor de 18 años" name="mayorDeEdad" onChange={ handleCheckbox }></CheckBox>
          </ColMd12>
        </Row>
        <button className="btn btn-block btn-coral mt-2" type="submit">Enviar</button>
        <a href="!#" className="d-flex justify-content-center">Ver terminos y condiciones</a>
      </form>
    );
}

export default Form;
