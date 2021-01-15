import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Container } from "react-bootstrap";
import { MenuContainer } from "./apartments.component.styles";

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
        <MenuContainer>
          <img src={config.img1} alt={config.img1_ALT} />
          <p className="legend">{config.img1_text}</p>
        </MenuContainer>
        <div>
          <img src={config.img2} alt={config.img2_ALT} />
          <p className="legend">{config.img2_text}</p>
        </div>
        <div>
          <img src={config.img3} alt={config.img3_ALT} />
          <p className="legend">{config.img3_text}</p>
        </div>
      </Carousel>
    </Container>
  );
};

export default ApartmentsPage;
