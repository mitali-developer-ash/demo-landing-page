import React from 'react'

const Button = ({props}) => {
  return (
    <button
    className={`px-4 py-2 items-center rounded-lg hover:bg-white hover:text-black bg-rose-700 text-white hover:shadow-xl transition-all`}
  >
    {props}
  </button>
);
}

export default Button