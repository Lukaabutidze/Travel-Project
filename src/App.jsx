import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ActivityCards from "./components/ActivityCards";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <ActivityCards />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
