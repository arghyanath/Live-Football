
import React, { useState } from 'react'
import LeagueTable from '../LeagueTable/LeagueTable'
import { Link } from 'react-router-dom'
const nd = new Date()
const dateConverted = nd.toDateString()

const Status = ({ data }) => {


    return (
        <div >
            <div className='flex justify-between items-center mb-4 md:mb-2'>
                <h1 className='text-md md:text-xl font-bold'>LIVE MATCHES</h1>
                <div className='px-4 py-0 md:py-1 bg-opacity-0 rounded-md text-sm'>
                    <p>{dateConverted}</p>
                </div>
            </div>

            <div className='w-full h-[100vh] overflow-y-scroll no-scrollbar'>
                {data.response.map((fixtures) => (
                    <Link to={`/fixture/${fixtures.fixture.id}`} key={fixtures.fixture.id} >
                        <div className='py-1'>
                            <LeagueTable data={fixtures} />
                        </div>
                    </Link>

                )

                )}


            </div>


        </div>

    )
}

export default Status