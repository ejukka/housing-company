import React from "react";

import { withGoogleMap, GoogleMap } from "react-google-maps";

const GoogleMapResult = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 60.3624643, lng: 24.3637589 }}
    defaultZoom={13}
  ></GoogleMap>
));

export default GoogleMapResult;
