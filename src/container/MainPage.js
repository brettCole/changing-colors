import React from 'react';
import NavMenu from '../components/NavMenu';
import GoogleMapsContainer from './GoogleMapsContainer';
import Repair from '../components/Repair';

class MainPage extends React.Component {
  render() {
    return (
      <div
        container
        spacing = { 24 }
      >
      <NavMenu />
      <Repair />
      <GoogleMapsContainer />
      </div>
    );
  }
}

export default MainPage;