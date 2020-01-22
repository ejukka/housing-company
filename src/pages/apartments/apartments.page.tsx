import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Container } from "react-bootstrap";

const config = {
  img1: `${process.env.REACT_APP_APARTMENTS_IMG1}`,
  img1_ALT: `${process.env.REACT_APP_APARTMENTS_IMG1_ALT}`,
  img1_text: `${process.env.REACT_APP_APARTMENTS_IMG1_TEXT}`,
  img2: `${process.env.REACT_APP_APARTMENTS_IMG2}`,
  img2_ALT: `${process.env.REACT_APP_APARTMENTS_IMG2_ALT}`,
  img2_text: `${process.env.REACT_APP_APARTMENTS_IMG2_TEXT}`,
  img3: `${process.env.REACT_APP_APARTMENTS_IMG3}`,
  img3_ALT: `${process.env.REACT_APP_APARTMENTS_IMG3_ALT}`,
  img3_text: `${process.env.REACT_APP_APARTMENTS_IMG3_TEXT}`
};

const ApartmentsPage = () => (
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

export default ApartmentsPage;
