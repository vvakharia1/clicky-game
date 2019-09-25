import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">Hello!</p>
        <Nav />
        <Jumbotron />
        <Footer />
      </div>
    );
  }
}

export default App;
