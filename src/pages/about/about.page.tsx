import React from "react";
import { ListGroup } from "react-bootstrap";
import GoogleMapResult from "../../components/google-map/google-map.component";

const AboutPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm">Osoite</div>
      <div className="col-sm">Rakennusvuosi</div>
      <div className="col-sm">Y-tunnus</div>
    </div>
    <div className="row">
      <div className="col-sm">Lansetintie 14, 03100 Nummela</div>
      <div className="col-sm">2007</div>
      <div className="col-sm">1953531-2</div>
    </div>
    <br />
    <ListGroup>
      <ListGroup.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.kauppalehti.fi/yritykset/yritys/asunto+oy+vihdin+makirinne+/19535312"
        >
          Kaupparekisteri ote
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.vihti.fi/?s=lankila"
        >
          Lankila
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.vihti.fi/wp-content/uploads/PERSEL-23.10.2012-WEB-N-160-Koillis-Lankila.pdf"
        >
          Koilis-Lankilan asemakaava
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ilmatieteenlaitos.fi/saa/vihti/lankilanrinne?forecast=daily&day=9"
        >
          Lankilanrinteen säätiedot
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.ojakkala.kylanetti.fi/index.php?page=Kylaen-esittely"
        >
          Naapurikylä Ojakkala
        </a>
      </ListGroup.Item>
    </ListGroup>
    <div>
      <GoogleMapResult
        containerElement={<div style={{ height: `500px`, width: "500px" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  </div>
);

export default AboutPage;
