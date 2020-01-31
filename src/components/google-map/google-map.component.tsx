import React from "react";

import { withGoogleMap, GoogleMap } from "react-google-maps";
import { googleMapconfig } from "../../utils/config";

const GoogleMapResult = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{
      lat: parseInt(googleMapconfig.latitude),
      lng: parseInt(googleMapconfig.longitude)
    }}
    defaultZoom={13}
  />
));

export default GoogleMapResult;
