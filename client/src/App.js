import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/NavBar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import images from "./planets.json";
import PlanetCard from "./components/Card";

class App extends Component {
  state = {
    images
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Wrapper>
          {this.state.images.map(images => (
            <PlanetCard
              key={images.id}
              image={images.image}
              name={images.name}
            />
          ))}
        </Wrapper>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
