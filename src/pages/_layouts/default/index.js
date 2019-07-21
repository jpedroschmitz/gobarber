import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Container } from './styles';
import Header from '~/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
