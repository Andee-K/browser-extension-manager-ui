import React from 'react'
import Switch from '@mui/material/Switch'

const Extension = ( { description, isActive, logo, name} ) => {
  return (
    <div className="bg-white w-[90%] rounded-2xl m-2 p-4 h-auto border border-neutral-300 shadow">
        <div className="grid grid-cols-4 gap-4 mb-4">
          <img 
            src={logo}
            alt={`${name} extension-logo`}
          />

          <div className="col-start-2 col-end-5">
            <h2 className="text-xl text-dark-blue font-bold mb-2">{name}</h2>
            <p className="text-neutral-500">{description}</p>
          </div>
        </div>

        <div className="flex justify-between">
          <button className="rounded-full text-dark-blue px-4 border border-neutral-300">Remove</button>
          <Switch checked={isActive}></Switch>
        </div>
    </div>
  )
}

export default Extension