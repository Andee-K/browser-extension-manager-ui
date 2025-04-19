import React from 'react'

const FilterButton = ( {filterName} ) => {
  return (
    <button className="rounded-full w-fit bg-white p-2 px-4 text-dark-blue shadow-md">{filterName}</button>
  )
}

export default FilterButton