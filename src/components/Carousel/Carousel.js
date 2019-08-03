import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";

class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }

  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <RBCarousel
        animation={true}
        autoplay={this.state.autoplay}
        slideshowSpeed={2000}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onSelect={this.onSelect}
        ref={r => (this.slider = r)}
        version={4}
      >
        <div style={{ height: 600 }}>
          <img
          style={{ width: "100%", height: "100%" }}
          src="http://dirigent.ru/wp-content/uploads/2014/10/k8e8ZqA0rP.jpg"
        />
      </div>
      <div style={{ height: 600 }}>
          <img
          style={{ width: "100%", height: "100%" }}
          src="http://dirigent.ru/wp-content/uploads/2014/10/k8e8ZqA0rP.jpg"
        />
      </div>
    </RBCarousel>
  );
}
}

export default Carousel;
