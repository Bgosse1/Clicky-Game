import React, { Component } from "react";
import { Figure } from "react-bootstrap";

class FigureImage extends Component {
  render() {
    return (
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="holder.js/171x180"
        />
      </Figure>
    );
  }
}


export default FigureImage;