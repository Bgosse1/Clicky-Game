import React from "react";
import { Figure } from "react-bootstrap";

function FigureImage(props) {
  return (
    <Figure onClick={() => props.clickHandler(props.id)}>
        <Figure.Image
          width={170}
          height={170}
          alt={props.name}
          src={props.image}
        />
      </Figure>
  );
}

export default FigureImage;
