import React, { useContext } from "react"

import Context from "./Context"

import { BsFillDashCircleFill, BsFillCheckCircleFill } from "react-icons/bs"

const SecurityItem = (props) => {
  const { name, itemCalled } = props
  return (
    <p className="flex flex-col items-center text-xs mx-2">
      {name}{" "}
      {itemCalled ? (
        <span
          style={{ boxShadow: "0 0 8px green" }}
          className="mt-1 text-xl rounded-full text-green-500">
          <BsFillCheckCircleFill />
        </span>
      ) : (
        <span
          style={{ boxShadow: "0 0 8px red" }}
          className="mt-1 text-xl ml-1 rounded-full text-red-500">
          <BsFillDashCircleFill />
        </span>
      )}
    </p>
  )
}

const MyBoard = () => {
  const { completObject } = useContext(Context)

  return (
    <div className="w-full md:w-7/12">
      {completObject.ip ? (
        <div className="flex flex-col md:flex-row justify-between shadow-2xl p-5 rounded-xl bg-slate-200 text-slate-500">
          {/* ip section  */}
          <div className="text-center">
            <p className=" font-bold">
              IP adress:{" "}
              <span className=" font-thin">
                {completObject.ip} [{completObject.type}]
              </span>
            </p>
            <p className="font-bold text-2xl flex justify-center">
              {completObject.carrier.name
                ? completObject.carrier.name
                : completObject.company.name}
            </p>
          </div>
          {/* location section  */}
          <div className="flex flex-col items-center mt-5 md:mt-0">
            <p className="font-bold text-xl">
              {completObject.location.region.name}
            </p>
            <p>
              {completObject.location.postal} {completObject.location.city}
            </p>
            <p>{completObject.location.continent.name}</p>
          </div>

          {/* time section  */}
          <div className="flex flex-col items-center mt-5 md:mt-0">
            <p className="font-bold">
              Timezone:{" "}
              <span className="font-thin">
                UTC {completObject.time_zone.current_time.slice(19)}
              </span>
            </p>
            <img
              style={{ width: "70px" }}
              src={completObject.location.country.flag.twemoji}
              alt="country flag"
            />
          </div>

          {/* security section  */}
          <div>
            <div className="flex flex-col items-center mt-5 md:mt-0">
              <p className="font-bold text-xl mb-2">Security:</p>
              <div className="flex justify-between">
                <SecurityItem
                  name="Proxy"
                  itemCalled={completObject.security.is_proxy}
                />
                <SecurityItem
                  name="Tor"
                  itemCalled={completObject.security.is_tor}
                />
                <SecurityItem
                  name="Vpn"
                  itemCalled={completObject.security.is_vpn}
                />
                <SecurityItem
                  name="Anonym"
                  itemCalled={completObject.security.is_anonymous}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        "there is no data to display"
      )}
    </div>
  )
}

export default MyBoard
