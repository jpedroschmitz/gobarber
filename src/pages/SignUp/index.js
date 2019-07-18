import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/images/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          placeholder="Qual o seu nome completo?"
        />
        <Input
          name="email"
          type="email"
          placeholder="E o seu e-mail? Estou curioso..."
        />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta..."
        />

        <button type="submit">Criar conta</button>

        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
