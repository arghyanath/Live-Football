import React, { useState } from 'react'
import { sampledata } from '../../API/sampledata.js'
import { Link, Route, Routes } from 'react-router-dom'
import FinishedFixtures from './Finished Matches/FinishedFixtures'
import UpcomingFixtures from './Upcoming Matches/UpcomingFixtures'
import { othersMatchesData } from '../../API/FootballApi.js'

const OtherMatches = () => {

    const [status, setStatus] = useState("Upcoming")
    return (
        <div className='w-[400px] px-2 md:px-4 text-xs  '>

            <div className='flex space-x-4 text-sm mb-2'>
                <div >
                    <button onClick={() => { setStatus("Finished") }} className={`border py-1 px-2 font-medium rounded-sm hover:scale-105 duration-200 
                ${status === 'Finished' ? 'bg-gray-200 text-primary ' : null}`} >Finished</button>
                </div>

                <div >
                    <button onClick={() => { setStatus("Upcoming") }} className={`border py-1 px-2 font-medium rounded-sm hover:scale-105 duration-200 
                ${status === 'Upcoming' ? 'bg-gray-200 text-primary ' : null}`} >Upcoming</button>
                </div>


            </div>

            <div className='h-[100vh] overflow-y-scroll no-scrollbar'>

                {status === 'Finished' ? <FinishedFixtures data={othersMatchesData} />
                    : <UpcomingFixtures data={othersMatchesData} />}


            </div>


        </div>

    )
}

export default OtherMatches