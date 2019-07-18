import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/images/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite o seu e-mail..." />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta..."
        />

        <button type="submit">Acessar</button>

        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
