import React from "react";
import "./App.css";
import BlogContainer from "./Components/BlogSection/BlogContainer";
import Card from "./Components/CardSection/Card";
import Footer from "./Components/footer/Footer";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import NewBallsSection from "./Components/NewBallsSection/NewBallsSection";
import Specials from "./Components/SpecialSection/Specials";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Card />
      <Specials />
      <NewBallsSection header="LOOK AT OUR NEW BALLS" />
      <NewBallsSection header="BALLS ON SALE" />
      <BlogContainer />
      <Footer />
    </div>
  );
}

export default App;
