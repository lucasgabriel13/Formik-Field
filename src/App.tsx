import React from 'react';
import { Formik, Form } from 'formik';
import Field from './components/Form/Field';
import schema from './schemas/schemaApp';

import './App.css';

interface FormValues {
  nome: string;
  email: string;
  senha: string;
}

export default function App() {

  const initialValues: FormValues = {
    nome: '',
    email: '',
    senha: '',
  }

  function onSubmit(values : FormValues) {
    console.log(values);
  }

  return (
    <div className="App">
      <Formik
        validateOnMount
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {({ isValid }) => (
          <Form>
            <div className="form-content">
              <Field name="nome" type="text" label="Nome" required/>
              <Field name="email" type="email" label="Email" required/>
              <Field name="senha" type="password" label="Senha" required/>
              <button disabled={!isValid} type="submit">Entrar</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

