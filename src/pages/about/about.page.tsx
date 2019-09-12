import React from "react";
import { ListGroup } from "react-bootstrap";
import { withGoogleMap, GoogleMap } from "react-google-maps";

const GoogleMapResult = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 60.3624643, lng: 24.3637589 }}
    defaultZoom={13}
  ></GoogleMap>
));

const AboutPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm">Osoite</div>
      <div className="col-sm">Rakennus vuosi</div>
      <div className="col-sm">Y-tunnus</div>
    </div>
    <div className="row">
      <div className="col-sm">Lansetintie 14, 03100 Nummela</div>
      <div className="col-sm">2007</div>
      <div className="col-sm">1953531-2</div>
    </div>
    <br />
    <ListGroup>
      <ListGroup.Item>Kaupparekisterissä vuodesta 2005</ListGroup.Item>
      <ListGroup.Item>
        <a href="https://www.kauppalehti.fi/yritykset/yritys/asunto+oy+vihdin+makirinne+/19535312">
          Kaupparekisteri
        </a>
      </ListGroup.Item>
      <ListGroup.Item>Lankilanrinne, Lankilan Kylä</ListGroup.Item>
      <ListGroup.Item>
        <a href="https://www.vihti.fi/wp-content/uploads/PERSEL-23.10.2012-WEB-N-160-Koillis-Lankila.pdf>">
          Koilis-Lankilan asemakaava
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a href="https://ilmatieteenlaitos.fi/saa/vihti/lankilanrinne?forecast=daily&day=9">
          Lankilanrinteen säätiedot
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a href="http://www.ojakkala.kylanetti.fi/index.php?page=Kylaen-esittely">
          Ojakkala
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
