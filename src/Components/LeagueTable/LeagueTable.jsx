import React from 'react'
import Matches from './Matches'
import Competitions from './Competitions'

const LeagueTable = ({ data }) => {
  return (
    <div className='py-3 px-2 md:px-3 rounded-md flex flex-col bg-black  bg-opacity-35 mb-2 duration-200 hover:scale-95'>
      <Competitions data={data} />
      <Matches data={data} />
      <p className='text-center text-sm text-green-400  pt-1'>{data.fixture.status.elapsed}'</p>
      <p className='text-center text-xs'>{data.fixture.status.long}</p>
    </div>




  )
}

export default LeagueTable