import React, { Component } from "react";
import Card from "./cardsUI";
import img1 from "../src/assets/stock.jpeg";

import "./index.css";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={img1} title="Testy testing" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img1} title="Boop" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img1} title="epic meme bro" />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
