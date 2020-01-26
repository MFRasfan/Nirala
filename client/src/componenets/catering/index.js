import React, { Component } from "react";
import './style.css';

class Catering extends Component {
  render() {
      return (
  
        <section id="catering">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block">
                  <h1 className=" heading wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms"> <span>our <span>CATERING</span> menu &amp; <span>PRICE</span></span></h1>
                  <p className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                  <li className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="600ms">
                    <div className="item">
                      <div className="item-title">
                        <h2>Meat of Skewers</h2>
                        <div className="border-bottom" />
                        <span>$ 15.00</span>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim&amp;&amp;</p>
                    </div>
                  </li>
                </div>
              </div>{/* .col-md-12 close */}
            </div>{/* .row close */}
          </div>{/* .containe close */}
        </section>
      );
    }
  };





export default Catering;