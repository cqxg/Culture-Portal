import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import RBCarousel from "react-bootstrap-carousel";

import carouselStyles from './carousel.module.less';

const Carousel = (props) => {
  const slides = props.images.map((image, i) => <img key={i} src={image.image} />);

//   return (
    // <RBCarousel className={carouselStyles.carousel_block}
    //   animation={true}
    //   autoplay={true}
    //   slideshowSpeed={2000}
    //   version={4}
    // >
    //   {slides}
    // </RBCarousel>
//   );
}

export default Carousel;
