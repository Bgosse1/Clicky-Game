import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/Navbar/index"
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Figure from "./components/Figure";

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <NavBar  />
      <Jumbotron/>
      <Wrapper>
        <Figure></Figure>
      </Wrapper>
      
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
