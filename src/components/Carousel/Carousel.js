import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../Image/Image";

import carouselStyles from './carousel.module.less';

const Carousel = (props) => {
  const slides = props.images.map((image, i) => {
    return <BootstrapCarousel.Item key={i}>
      <Image src={image.image} />
    </BootstrapCarousel.Item>
  });

  return (
    <BootstrapCarousel>
      {slides}
    </BootstrapCarousel>
  );
}

export default Carousel;
