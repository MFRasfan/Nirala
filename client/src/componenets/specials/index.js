import React, { Component } from "react";
import './style.css';
import SP from "../specials/specials/blog-img-1.jpg";

class Specials extends Component {
  render() {
    return (

      <section id="specials">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1 className="heading">OUR <span>specials</span></h1>
                <ul>
                  <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="300ms">
                    <div className="specials-img">
                    <img src={SP} alt="website logo"/>                   
                    </div>
                    <div className="content-right">
                      <h3>Homestyle Chicken Pot Pie</h3>
                      <p>Prepared in true New England fash-ion. Tender all-white meat chicken simmered...</p>
                    </div>
                  </li>
                  <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="400ms">
                    <div className="specials-img">
                    <img src={SP} alt="website logo"/>                   
                     </div>
                    <div className="content-right">
                      <h3>Homestyle Chicken Pot Pie</h3>
                      <p>Prepared in true New England fash-ion. Tender all-white meat chicken simmered...</p>
                    </div>
                  </li>
                  <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="500ms">
                    <div className="content-left">
                      <h3>Homestyle Chicken Pot Pie</h3>
                      <p>Prepared in true New England fash-ion. Tender all-white meat chicken simmered...</p>
                    </div>
                    <div className="specials-img-2">
                    <img src={SP} alt="website logo"/>                   
                    </div>
                  </li>
                  <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="600ms">
                    <div className="content-left">
                      <h3>Homestyle Chicken Pot Pie</h3>
                      <p>Prepared in true New England fash-ion. Tender all-white meat chicken simmered...</p>
                    </div>
                    <div className="specials-img-2">
                    <img src={SP} alt="website logo"/>                   
                    </div>
                  </li>
                  <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="700ms">
                    <div className="specials-img">
                    <img src={SP} alt="website logo"/>                   
                    </div>
                    <div className="content-right">
                      <h3>Homestyle Chicken Pot Pie</h3>
                      <p>Prepared in true New England fash-ion. Tender all-white meat chicken simmered...</p>
                    </div>
                  </li>
                  <li className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="800ms">
                    <div className="specials-img">
                    <img src={SP} alt="website logo"/>                   
                    </div>
                    <div className="content-right">
                      <h3>Homestyle Chicken Pot Pie</h3>
                      <p>Prepared in true New England fash-ion. Tender all-white meat chicken simmered...</p>
                    </div>
                  </li>
                </ul>
                <a className="btn btn-default btn-more-info wow bounceIn" data-wow-duration="500ms" data-wow-delay="1200ms" href="#" role="button">More Info</a>
              </div>
            </div>{/* .col-md-12 close */}
          </div>{/* .row close */}
        </div>{/* .containe close */}
      </section>
    );
  }
};









export default Specials;
