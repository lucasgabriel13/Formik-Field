import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

//Herda todos as propriedades que um input posso ter input
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export default function Field(props: Props) {

  //recebe todas as propriedades da instância
  const [inputProps, meta] = useField(props);
  const id = props.id || props.name;

  return (
    <>
      {props.label && (
        <label htmlFor={id}>{props.label}</label>
      )}
      <input id={id} {...inputProps} {...props} />
      {meta.error && meta.touched && (
        <span>{meta.error.toString()}</span>
      )}
    </>
  );
}