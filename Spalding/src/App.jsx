import React from "react";
import "./App.css";
import Card from "./Components/CardSection/Card";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Card />
    </div>
  );
}

export default App;
