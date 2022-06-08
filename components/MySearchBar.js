import React, { useContext } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

import Context from "./Context"

import { AiFillAlert } from "react-icons/ai"
import { SiOpenstreetmap } from "react-icons/si"

const MySearchBar = () => {
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
    <div className="w-96">
      <form onSubmit={formik.handleSubmit} className="border p-1">
        <div className="flex btn-group">
          <input
            id="userIP"
            name="userIP"
            type="text"
            placeholder="Type an Ip adress here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userIP}
            className="border w-full p-2 my-2"
          />
          <button
            type="submit"
            className="btn border-t border-r border-b text-3xl p-2  my-2">
            <SiOpenstreetmap />
          </button>
        </div>
        {formik.touched.userIP && formik.errors.userIP ? (
          <div className="flex items-center justify-center text-red-400 bg-red-700 p-2 rounded-xl shadow-lg">
            <AiFillAlert />
            <span className="mx-2 text-red-100">
              This is not a correct ip adress!
            </span>
            <AiFillAlert />
          </div>
        ) : null}
      </form>
    </div>
  )
}

export default MySearchBar
