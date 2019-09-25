import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Wrapper 
        />
        <Footer />
      </div>
    );
  }
}

export default App;
