import React from "react";

import { withGoogleMap, GoogleMap } from "react-google-maps";

const config = {
  latitude: `${process.env.REACT_APP_LATITUDE}`,
  longitude: `${process.env.REACT_APP_LONGITUDE}`
};

const GoogleMapResult = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{
      lat: parseInt(config.latitude),
      lng: parseInt(config.longitude)
    }}
    defaultZoom={13}
  />
));

export default GoogleMapResult;
