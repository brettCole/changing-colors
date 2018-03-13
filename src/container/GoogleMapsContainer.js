import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
  render() {
    return (
      <Map google = { this.props.google } zoom = { 14 }>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  api: (YOUR_GOOGLE_API)
})(GoogleMapsContainer)