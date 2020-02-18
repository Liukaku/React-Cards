import React from "react";
import img1 from "../src/assets/stock.jpeg";

import "./index.css";

const Card = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={img1} alt="" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Test Text</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          expedita odit laborum perspiciatis mollitia ipsum amet minima sit ad
          neque voluptates tempore, in aspernatur modi doloremque libero autem
          unde dicta!
        </p>
        <a href="#" className="btn btn-outline-success">
          Go Somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
