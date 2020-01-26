import React, { Component } from "react";
import './style.css';

class Contact extends Component {
  render() {
      return (
  
        <section id="contact-us">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block">
                  <h1 className="heading wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">our <span>CONTACT US</span></h1>
                  <h3 className="title wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">Request Quotes for <span>Private Events </span> </h3>
                  <form>
                    <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="600ms">
                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Write your full name here..." />
                    </div>
                    <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="800ms">
                      <input type="text" className="form-control" placeholder="Write your email address here..." />
                    </div>
                    <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1000ms">
                      <textarea className="form-control" rows={3} placeholder="Write your message here..." defaultValue={""} />
                    </div>
                  </form>
                  <a className="btn btn-default wow bounceIn" data-wow-duration="500ms" data-wow-delay="1300ms" href="#" role="button">send your message</a>
                </div>
              </div>{/* .col-md-12 close */}
            </div>{/* .row close */}
          </div>{/* .container close */}
        </section>
      );
    }
  };


export default Contact;