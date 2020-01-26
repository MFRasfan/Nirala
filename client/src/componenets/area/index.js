import React, { Component } from "react";
import Hero from "../area/AdobeStock_225266896_Preview.jpg";

class Area extends Component {
  render() {
      return (
          <section id="hero-area">
            <img
              className="img-responsive"
              src={Hero}
              alt
            />
          </section>
         
      );
    }
  };
  
  export default Area;
