import React from 'react'

const ThemeSwitch = () => {
  return (
    <div className="extension-header flex justify-between rounded-sm w-[90%] h-min p-2 bg-white drop-shadow-md">
        <img src={"/assets/images/logo.svg"}></img>
        <button className="bg-neutral-100 rounded-lg p-3"> <img src={"/assets/images/icon-moon.svg"} alt="logo" /></button>
    </div>
  )
}

export default ThemeSwitch