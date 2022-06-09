import React from "react"
import { createContext, useState } from "react"

export const Provider = (props) => {
  const [ip, setIp] = useState("142.250.217.78")
  const [completObject, setcompletObject] = useState({})

  return (
    <Context.Provider
      {...props}
      value={{
        ip,
        setIp,
        completObject,
        setcompletObject,
      }}></Context.Provider>
  )
}

const Context = createContext()
export default Context

// 86.218.115.0
// 143.131.0.0
// 46.19.37.108
// google.com – 142.250.217.78
// gmail.com – 142.251.33.69
// duckduckgo.com – 40.89.244.232
// facebook.com – 157.240.3.35
// youtube.com – 216.58.206.238
// ebay.com – 66.211.175.229
// Yahoo search – 98.136.144.138
