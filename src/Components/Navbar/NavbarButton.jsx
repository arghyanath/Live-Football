import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavbarButton = () => {
    const [status, setStatus] = useState("Upcoming")

    return (

        <div className='flex space-x-4 text-sm'>
            <Link to={'/matches/finished'}>
                <button onClick={() => { setStatus("Finished") }} className={`border py-1 px-2 font-medium rounded-sm hover:scale-105 duration-200 
                ${status === 'Finished' ? 'bg-gray-200 text-primary ' : null}`} >Finished</button>
            </Link>

            <Link to={'/mathces/upcoming'} >
                <button onClick={() => { setStatus("Upcoming") }} className={`border py-1 px-2 font-medium rounded-sm hover:scale-105 duration-200 
                ${status === 'Upcoming' ? 'bg-gray-200 text-primary ' : null}`} >Upcoming</button>
            </Link>


        </div>
    )
}

export default NavbarButton