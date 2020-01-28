import React from 'react';
import Container from 'react-bootstrap/Container'

import Routes from './routes'
import Header from './template/Header'

function App() {
  
  return (
    <Container>
      <Header />
      <Routes />
    </Container>
  );
}

export default App;
