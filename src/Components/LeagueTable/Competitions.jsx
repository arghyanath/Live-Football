import React from 'react'

const Competitions = ({ data }) => {

  return (
    <div className='mb-4 flex justify-between items-center px-4 py-1
  bg-gray-300 bg-opacity-20 rounded-md'>
      <div className='flex space-x-4'>
        <img src={data.league.logo} alt={data.league.name} width={20} height={20} />
        <p className=' text-xs md:text-sm'>{data.league.name}</p>
      </div>

    </div>
  )
}

export default Competitions