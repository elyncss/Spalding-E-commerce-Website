import React from "react";
import "./App.css";
import Card from "./Components/CardSection/Card";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Specials from "./Components/SpecialSection/Specials";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Card />
      <Specials />
    </div>
  );
}

export default App;
