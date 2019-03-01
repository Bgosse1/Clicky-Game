import React from "react";
import { Figure } from "react-bootstrap";

function FigureImage(props) {
  return (
    <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={props.image}
        />
      </Figure>
  );
}

export default FigureImage;
