
import React, { Component } from "react";
import './style.css';

class Slider extends Component {
  render() {
      return (
        
        <div>

        <section id="slider">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">
                  <div className="title">
                    <h3>Chef's  <span>Favourites</span></h3>
                  </div>
                  <div id="owl-example" className="owl-carousel">
                    <div>
                      <img className="img-responsive" src="images/slider/AdobeStock_4816753_Preview.jpg" alt="" />
                    </div>
                    <div>
                      <img className="img-responsive" src="images/slider/AdobeStock_252397235_Preview.jpeg" alt="" />
                    </div>
                    <div>
                      <img className="img-responsive" src="images/slider/AdobeStock_234941150_Preview.jpeg" alt="" />
                    </div>
                    <div>
                      <img className="img-responsive" src="images/slider/AdobeStock_33971841_Preview.jpeg" alt="" />
                    </div>
                    <div>
                      <img className="img-responsive" src="images/slider/AdobeStock_4816753_Preview.jpg" alt="" />
                    </div>
                    <div>
                      <img className="img-responsive" src="images/slider/AdobeStock_252397235_Preview.jpeg" alt="" />
                    </div>
                    <div>
                      <img className="img-responsive" src="images/slider/AdobeStock_234941150_Preview.jpeg" alt="" />
                    </div>
                    <div>
                      <img className="img-responsive" src="images/slider/AdobeStock_33971841_Preview.jpeg" alt="" />
                    </div>
                  </div>
                </div>
              </div>{/* .col-md-12 close */}
            </div>{/* .row close */}
          </div>{/* .container close */}
        </section>
        </div>

      );
    }
  };

  export default Slider;

