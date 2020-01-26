import React, { Component } from "react";
import './style.css';

class Navigation extends Component {
  render() {
      return (
        <div>
          <section id="hero-area">
            <img
              className="img-responsive"
              src="images/AdobeStock_225266896_Preview.jpg"
              alt
            />
          </section>
          {/*
      Header start 
      ============================== */}
          <nav id="navigation">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block">
                    <nav className="navbar navbar-default">
                      <div className="container-fluid">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                          <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                          >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                          </button>
                          <a className="navbar-brand" href="#">
                            <img src="images/logo.png" alt="Logo" />
                          </a>
                        </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div
                          className="collapse navbar-collapse"
                          id="bs-example-navbar-collapse-1"
                        >
                          <ul
                            className="nav navbar-nav navbar-right"
                            id="top-nav"
                          >
                            <li>
                              <a href="#hero-area">Home</a>
                            </li>
                            <li>
                              <a href="#about-us">about us</a>
                            </li>
                            <li>
                              <a href="#specials">Specials</a>
                            </li>
                            <li>
                              <a href="#price">menu</a>
                            </li>
                            <li>
                              <a href="#catering">catering</a>
                            </li>
                            <li>
                              <a href="#contact-us">contacts</a>
                            </li>
                          </ul>
                        </div>
                        {/* /.navbar-collapse */}
                      </div>
                      {/* /.container-fluid */}
                    </nav>
                  </div>
                </div>
                {/* .col-md-12 close */}
              </div>
              {/* .row close */}
            </div>
            {/* .container close */}
          </nav>
          {/* header close */}
        </div>
      );
    }
  };
  
  export default Navigation;
