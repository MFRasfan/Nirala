import React, { Component } from "react";
import './style.css';

class Footer extends Component {
  render() {
      return (
        <div>
          <section id="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="block wow fadeInLeft" data-wow-delay="200ms">
                    <h3>CONTACT <span>INFO</span></h3>
                    <div className="info">
                      <ul>
                        <li>
                          <h4><i className="fa fa-phone" />Telephone</h4>
                          <p>+1-416-291-7232</p>
                        </li>
                        <li>
                          <h4><i className="fa fa-map-marker" />Address</h4>
                          <p>22818 Markham Rd, Scarborough, ON M1X 1E6, Canada.</p>
                        </li>
                        <li>
                          <h4><i className="fa fa-envelope" />E mail</h4>
                          <p>info@nirala.ca</p>
                        </li>
                      </ul>
                    </div>
                    <h3>OUR <span>HOURS</span></h3>
                    <div className="info">
                      <ul>
                        <li>
                          <h4><i className="fas fa-door-closed" />Monday</h4>
                          <p>CLOSED</p>
                        </li>
                        <li>
                          <h4><i className="fas fa-door-open" />Tuesday - Friday </h4>
                          <p>11:00am to 11:00pm</p>
                        </li>
                        <li>
                          <h4><i className="fas fa-door-open" />Saturday/Sunday/Holidays</h4>
                          <p>9:00am to 11:00pm</p>
                        </li>
                      </ul>
                    </div>
                    <div className="social-media-link">
                      <h3>Follow <span>US</span></h3>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/niralasweetsandrestaurant.ca/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.yelp.ca/biz/nirala-sweets-and-restaurant-scarborough" target="_blank">
                            <i className="fab fa-yelp" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* .col-md-4 close */}
                <div className="col-md-8">
                  <div className="block wow fadeInLeft" data-wow-delay="700ms">
                    <div className="block wow fadeInLeft" data-wow-delay="1100ms">
                      <div className="google-maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368074.9139375462!2d-79.32250604629132!3d43.88514382692699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d6d673f9639d%3A0x10987eb19a82026f!2sNirala%20Sweets%20and%20Restaurant!5e0!3m2!1sen!2sca!4v1579991076987!5m2!1sen!2sca" width={1000} height={150} frameBorder={0} style={{border: 0}} allowFullScreen />
                      </div>
                    </div>
                  </div>
                </div>
                {/* .col-md-4 close */}
                {/* .col-md-4 close */}
              </div>{/* .row close */}
            </div>{/* .containe close */}
          </section>{/* #footer close */}
          {/*
      footer-bottom  start
      ============================= */}
          <footer id="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="block">
                    <p>Copyright © 2020 - All Rights Reserved.<a href="http://www.nirala.ca">Nirala Sweets and Restaurant </a></p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      );
    }
  };







export default Footer;