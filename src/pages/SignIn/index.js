import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="email" placeholder="Digite o seu e-mail..." />
        <input type="password" placeholder="Sua senha secreta..." />

        <button type="submit">Acessar</button>

        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
