import Header from "./components/Header";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

import React from "react";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Pro Shop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
