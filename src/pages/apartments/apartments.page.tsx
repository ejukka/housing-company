import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Container } from "react-bootstrap";

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
        <img
          src="https://i.postimg.cc/HsF3Mxsd/image1.jpg"
          alt={"house b2 and b3"}
        />
        <p className="legend">Paritalo: asunnot B2 ja B3</p>
      </div>
      <div>
        <img src="https://i.postimg.cc/158J46Sv/image2.jpg" alt={"house a"} />
        <p className="legend">Erillistalo: Asunto A</p>
      </div>
      <div>
        <img src="https://i.postimg.cc/YqCTRhHF/image3.jpg" alt={"house a"} />
        <p className="legend">Erillistalo: Asunto A</p>
      </div>
    </Carousel>
  </Container>
);

export default ApartmentsPage;
