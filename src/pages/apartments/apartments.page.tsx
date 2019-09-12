import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Container } from "react-bootstrap";

const ApartmentsPage = () => (
  <Container>
    <Carousel
      showArrows={true}
      showStatus={true}
      infiniteLoop={true}
      autoPlay={true}
    >
      <div>
        <img src="https://i.postimg.cc/HsF3Mxsd/image1.jpg" />
        <p className="legend">Paritalo: asunnot B2 ja B3</p>
      </div>
      <div>
        <img src="https://i.postimg.cc/158J46Sv/image2.jpg" />
        <p className="legend">Erillistalo: Asunto A</p>
      </div>
      <div>
        <img src="https://i.postimg.cc/YqCTRhHF/image3.jpg" />
        <p className="legend">Erillistalo: Asunto A</p>
      </div>
    </Carousel>
  </Container>
);

export default ApartmentsPage;
