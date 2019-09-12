import React from "react";
import { Carousel } from "react-responsive-carousel";

const ApartmentsPage = () => (
  <Carousel>
    <div>
      <img src="talo1.png" />
      <p className="legend">Paritalo: asunnot B2 ja B3</p>
    </div>
    <div>
      <img src="talo1.png" />
      <p className="legend">Erillistalo: Asunto A</p>
    </div>
  </Carousel>
);

export default ApartmentsPage;
