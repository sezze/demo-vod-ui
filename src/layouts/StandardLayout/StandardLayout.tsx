import React from 'react';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Container } from './styles';

const StandardLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default StandardLayout;
