import React from "react";
import "./style.css";
import { Nav, Navbar } from "react-bootstrap";

function NavBar(props) {
    return (
      <Nav justify defaultActiveKey="/" className="nav-bar">
        <Nav.Item>
          <Nav.Link href="/" className="nav-link">Clicky Game</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Navbar.Text>{props.message}</Navbar.Text>
        </Nav.Item>
        <Nav.Item>
          <Navbar.Text>Score: {props.correctGusses} | Top Score: {props.topScore}</Navbar.Text>
        </Nav.Item>
      </Nav>
    );
};

export default NavBar;
