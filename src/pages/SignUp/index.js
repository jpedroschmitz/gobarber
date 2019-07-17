import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="text" placeholder="Qual o seu nome completo?" />
        <input type="email" placeholder="E o seu e-mail? Estou curioso..." />
        <input type="password" placeholder="Sua senha secreta..." />

        <button type="submit">Criar conta</button>

        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
