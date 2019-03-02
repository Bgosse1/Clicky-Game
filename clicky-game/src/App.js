import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar/index";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Figure from "./components/Figure";
import collections from "./collection.json";
import Footer from "./components/Footer";

let topScore = 0;
let correctGusses = 0;
let message = "";

class App extends Component {
  state = {
    collections,
    topScore: 0,
    correctGusses: 0,
    message: "Click an image to begin!",
  };

  clickHandler = event => {
    const collections = this.state.collections;
    const itemClicked = collections.filter(item => item.id === event);

    if (itemClicked[0].clicked) {

      correctGusses = 0;
      message = "You guessed incorrectly!";
      collections.map(item => (item.clicked = false));

      this.setState({ message });
      this.setState({ correctGusses });
      this.setState({ collections });

    } else {
      itemClicked[0].clicked = true;
      correctGusses++;
      message = "You guessed correctly!";

      if (correctGusses > topScore) {
        topScore = correctGusses;
        this.setState({ topScore });
      }

      collections.sort((a, b) => {
        return Math.random() - 0.5;
      });


      this.setState({ collections });
      this.setState({ correctGusses });
      this.setState({ message });
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar message={this.state.message} correctGusses={this.state.correctGusses} topScore={this.state.topScore}/>
        <Jumbotron />
        <Wrapper>
          {this.state.collections.map(item => (
            <Figure
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              clickHandler={this.clickHandler}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
