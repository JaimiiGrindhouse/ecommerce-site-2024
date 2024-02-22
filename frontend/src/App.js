import Header from "./components/Header";
import { Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

import React from "react";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
