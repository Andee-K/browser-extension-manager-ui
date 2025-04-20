import { useState } from 'react'
import Switch from 'react-switch'

const Extension = ( { description, isActive, logo, name} ) => {
  const [checked, setChecked] = useState(isActive);

  function handleOnChange() {
    setChecked(!checked);
    console.log(`switching active state of ${name} switch`)
  }

  return (
    <div className="bg-white w-[90%] rounded-2xl m-2 p-4 h-52 border border-neutral-300 shadow">
        <div className="grid grid-cols-4 gap-4 mb-6">
          <img 
            src={logo}
            alt={`${name} extension-logo`}
          />

          <div className="col-start-2 col-end-5">
            <h2 className="text-xl text-dark-blue font-bold mb-2">{name}</h2>
            <p className="text-neutral-500 h-20">{description}</p>
          </div>
        </div>

        <div className="flex justify-between place-items-center">
          <button className="rounded-full text-dark-blue h-8 px-4 border border-neutral-300">Remove</button>
          <Switch checked={checked} onChange={handleOnChange} onColor="#c7221a" height={24} width={44} handleDiameter={20} checkedIcon={false} uncheckedIcon={false}></Switch>
        </div>
    </div>
  )
}

export default Extension