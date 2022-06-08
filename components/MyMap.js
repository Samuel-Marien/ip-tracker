import React, { useEffect, useState, useContext } from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"
import axios from "axios"

import Context from "./Context"

const MyMap = (props) => {
  const { ip } = useContext(Context)
  const [userLat, setUserLat] = useState(0)
  const [userLng, setUserLng] = useState(0)

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=${process.env.NEXT_PUBLIC_API_KEY_IP}&ipAddress=${ip}`
      )
      .then(function (response) {
        // handle success
        console.log(response.data)
        setUserLat(response.data.location.lat)
        setUserLng(response.data.location.lng)
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
    width: "100%",
    height: "500px",
  }

  const center = {
    lat: userLat,
    lng: userLng,
  }

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default MyMap
