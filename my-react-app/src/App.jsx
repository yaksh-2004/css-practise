import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import CTA from "./components/CTA";
import HostDetail from "./components/HostDetail";
import Statistics from "./components/Statistics";
import Review from "./components/Review";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <CTA />
      <HostDetail />
      <Statistics />
      <Review />
      <Form />
    </>
  );
}

export default App;
