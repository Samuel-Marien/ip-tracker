import React from "react"
import { createContext, useState } from "react"

export const Provider = (props) => {
  const [ip, setIp] = useState("")
  //   const [location, setLocation] = useState("California, Manhattan Beach, 90266")
  //   const [timezone, setTimezone] = useState("UTC-07:00")
  //   const [isp, setIsp] = useState("SpaceX Services, Inc.")
  //   const [lat, setLat] = useState(33.88474)
  //   const [lng, setLng] = useState(-118.41091)

  return (
    <Context.Provider
      {...props}
      value={{
        ip,
        setIp,
        // location,
        // setLocation,
        // timezone,
        // setTimezone,
        // isp,
        // setIsp,
        // lat,
        // setLat,
        // lng,
        // setLng,
      }}></Context.Provider>
  )
}

const Context = createContext()
export default Context

// 86.218.115.0
// 143.131.0.0
// 8.8.8.8
