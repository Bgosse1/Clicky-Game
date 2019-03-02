import React, {Component} from "react";
import { Figure } from "react-bootstrap";

class FigureImage extends Component {
  render() {
    return (
      <Figure onClick={() => this.props.clickHandler(this.props.id)}>
          <Figure.Image
            width={170}
            height={170}
            alt={this.props.name}
            src={this.props.image}
          />
        </Figure>
    );
  }
}

export default FigureImage;
