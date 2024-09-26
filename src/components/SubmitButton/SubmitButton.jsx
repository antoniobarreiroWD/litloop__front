import React from "react"

const SubmitButton = ({ darkMode }) => {
  return (
    <button
      className={`min-h-[56px] w-full text-2xl mt-14 rounded-2xl font-bold ${
        darkMode
          ? "bg-gray-800 text-white hover:bg-gray-600"
          : "bg-black text-gray-200 hover:bg-gray-300"
      }`}
      type="submit"
    >
      Submit
    </button>
  )
}

export default SubmitButton
