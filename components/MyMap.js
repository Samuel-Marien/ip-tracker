import React, { useEffect, useState, useContext } from 'react'
import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api'
import axios from 'axios'

import Context from './Context'

const MyMap = (props) => {
  const { ip } = useContext(Context)
  const { completObject, setcompletObject } = useContext(Context)
  const [userLat, setUserLat] = useState(0)
  const [userLng, setUserLng] = useState(0)
  const [companyName, setCompanyName] = useState('')

  useEffect(() => {
    axios
      // .get(
      //   `https://geo.ipify.org/api/v1?apiKey=${process.env.NEXT_PUBLIC_API_KEY_IP}&ipAddress=${ip}`
      // )
      .get(
        `https://api.ipregistry.co/${ip}?key=${process.env.NEXT_PUBLIC_API_KEY_IP2}`
      )
      .then(function (response) {
        // handle success
        // console.log(response.data)
        setcompletObject(response.data)
        setUserLat(response.data.location.latitude)
        setUserLng(response.data.location.longitude)
        setCompanyName(response.data.company.name)
        // console.log(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }, [ip])

  const containerStyle = {
    width: '100%',
    height: '1000px'
  }

  const center = {
    lat: userLat,
    lng: userLng
  }

  const position = {
    lat: userLat,
    lng: userLng
  }

  const onLoad = (marker) => {
    // console.log('marker: ', marker.visible)
  }
  console.log(companyName)
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Child components, such as markers, info windows, etc. */}

        <Marker
          onLoad={onLoad}
          position={position}
          title={completObject.company ? completObject.company.domain : null}
          visible={true}
        />

        <InfoBox onLoad={onLoad} position={center}>
          <div className="border p-2 opacity-75 bg-slate-400 rounded-xl">
            <div className="font-bold text-xl">
              <p>👋 Hello, {companyName}</p>
            </div>
          </div>
        </InfoBox>
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default MyMap
