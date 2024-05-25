
import React from 'react'

import SidebarLinks from './SidebarLinks'

const Sidebar = ({ data }) => {

    var leagueName = []
    var leagues = []

    data.response.map(element => {

        if (!leagueName.includes(element.league.name)) {
            leagueName.push(element.league.name)
            leagues.push(element.league)
        }

    })


    return (
        <div className='px-2 md:px-4 py-2 bg-black bg-opacity-30 rounded-md h-[100vh] overflow-y-scroll no-scrollbar'>
            <div>
                <h1 className='font-bold text-xl mb-4'>Live Leagues</h1>
                {leagues.map((league) => (
                    <div key={league.id} className='flex'>
                        <SidebarLinks league={league} />
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Sidebar