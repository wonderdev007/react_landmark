import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import data from "./data/data";

export default function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })


  return (
    <div className="App">
      <Navbar />
      <main>
        {cards}
      </main>
      <Footer />
    </div>
  );
}