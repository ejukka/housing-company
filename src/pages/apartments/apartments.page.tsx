import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Container } from "react-bootstrap";

const ApartmentsPage = (props: any) => {
  const { ...config } = props.props;
  return (
    <Container>
      <Carousel
        showArrows
        showStatus
        infiniteLoop
        autoPlay
        showIndicators
        stopOnHover
        interval={2000}
      >
        <div>
          <img src={config.img1} alt={config.img1_ALT} />
          <p className="legend">{config.img1_text}</p>
        </div>
        <div>
          <img src={config.img2} alt={config.img2_ALT} />
          <p className="legend">{config.img2}</p>
        </div>
        <div>
          <img src={config.img3} alt={config.img3_ALT} />
          <p className="legend">{config.img3}</p>
        </div>
      </Carousel>
    </Container>
  );
};

export default ApartmentsPage;
