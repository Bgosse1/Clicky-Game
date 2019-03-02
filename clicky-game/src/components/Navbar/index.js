import React, {Component} from "react";
import "./style.css";
import { Nav, Navbar } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Nav justify defaultActiveKey="/" className="nav-bar">
        <Nav.Item>
          <Nav.Link href="/" className="nav-link">Clicky Game</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Navbar.Text>{this.props.message}</Navbar.Text>
        </Nav.Item>
        <Nav.Item>
          <Navbar.Text>Score: {this.props.correctGusses} | Top Score: {this.props.topScore}</Navbar.Text>
        </Nav.Item>
      </Nav>
    );
  }
}

export default NavBar
