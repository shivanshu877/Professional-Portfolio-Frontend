import React from "react";
import "./App.scss";
import { Navbar } from "./components";
import { About, Footer, Header, Skills, Work, Testimonial } from "./containers";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default App;
