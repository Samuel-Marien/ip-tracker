import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from 'axios'

const MyMap = () => {
  const [userLat, setUserLat] = useState(0)
  const [userLng, setUserLng] = useState(0)


  useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.NEXT_PUBLIC_API_KEY_IP}&ipAddress=20.81.111.85`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setUserLat(response.data.location.lat);
        setUserLng(response.data.location.lng)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [])

  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: userLat,
    lng: userLng
  };

  return <LoadScript
    googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY}
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  </LoadScript>
}

export default MyMap