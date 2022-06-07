import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MyMap = () => {

  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat:  48.877535,
    lng: 2.59016
  };

  return<LoadScript
  googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY}
>
  <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={15}
  >
    { /* Child components, such as markers, info windows, etc. */ }
    <></>
  </GoogleMap>
</LoadScript>
}

export default MyMap