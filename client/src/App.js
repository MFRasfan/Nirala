import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';
import './css/main.css';
import './css/responsive.css';
import './css/animate.min.css';
import './css/font-awesome.min.css';
// import './css/owl.carousel.css';



import Area from "./componenets/area"
import Navigation from "./componenets/navigation"
import About from "./componenets/about-us"
import Catering from "./componenets/catering"
import Contact from "./componenets/contact-us"
import Footer from "./componenets/footer"
import Price from "./componenets/price"
import Slider from "./componenets/slider"
import Specials from "./componenets/specials"


class App extends Component {
  render() {

    return (
<div>



<Area></Area>

<Navigation>
 
</Navigation>

<Slider></Slider>

<About></About>

<Price></Price>

<Specials></Specials>

<Catering></Catering>

<Contact></Contact>

<Footer></Footer>


</div>






    )
  }
}


export default App;
