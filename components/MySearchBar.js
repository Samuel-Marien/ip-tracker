import React, { useContext } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

import Context from "./Context"

import { AiFillAlert } from "react-icons/ai"
import { SiOpenstreetmap } from "react-icons/si"
import { FaInfoCircle, FaMapMarked } from "react-icons/fa"

const MySearchBar = (props) => {
  const { onClickInfo, onClickMap } = props
  const { setIp } = useContext(Context)

  const formik = useFormik({
    initialValues: {
      userIP: "",
    },
    validationSchema: Yup.object({
      userIP: Yup.string()
        .matches(
          /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
        )
        .required("Required"),
    }),
    onSubmit: (values) => {
      setIp(values.userIP)
    },
  })

  return (
    <div
      className="w-full h-64 md:h-96"
      style={{
        backgroundImage:
          "url('https://pixabay.com/get/g2573dda6895039277f8be93f23dbd1bc01237b53cee7164ae4ead5b4e93122ca4c91b26f3aed10b6c71bd9ed27abca936baa143a3d63e5b4f5a473977655a097e82201d6fbef57e0db4a75bdabb53307_1920.jpg')",
      }}>
      <p className="text-white flex justify-center font-bold text-2xl md:text-4xl mt-5">
        IP Adress Tracker
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className="md:w-4/12 w-11/12 mx-auto my-5 md:my-10">
        {/* section searchbar  */}
        <div className="flex">
          <input
            id="userIP"
            name="userIP"
            type="text"
            placeholder="Type an Ip adress..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userIP}
            className=" rounded-l-lg w-full p-2"
          />
          <button
            type="submit"
            className="btn border-t border-r border-b text-3xl p-2 rounded-r-lg  bg-blue-400 text-blue-900 hover:bg-blue-900 hover:text-blue-300 transition-all duration-500">
            <SiOpenstreetmap />
          </button>
        </div>

        {/* section error message  */}
        {formik.touched.userIP && formik.errors.userIP ? (
          <div
            style={{ boxShadow: "0 0 18px red" }}
            className="mt-4 flex items-center justify-center text-red-400 bg-red-700 p-2 rounded-xl shadow-lg">
            <AiFillAlert />
            <span className="mx-2 text-red-100">
              This is not a correct ip adress!
            </span>
            <AiFillAlert />
          </div>
        ) : null}
        {/* section toggle  */}
        <div className="flex md:hidden mt-2 justify-center">
          <button
            type="button"
            onClick={onClickInfo}
            className="bg-slate-400 p-1 rounded text-2xl mt-4 ">
            <FaInfoCircle />
          </button>
        </div>
      </form>
    </div>
  )
}

export default MySearchBar
