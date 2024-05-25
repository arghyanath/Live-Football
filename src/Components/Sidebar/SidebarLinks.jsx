
import React from 'react'
import { Link } from 'react-router-dom'

const SidebarLinks = ({ league }) => {

    return (
        < Link to={`/league/${league.name}`
        } className='flex items-center py-2 px-2 rounded-md duration-200 hover:scale-110' >
            <img src={league.logo} alt={league.name} width={20} height={20} />
            <p className='ml-4 text-xs md:text-sm '>{league.name}</p>
        </Link >
    )
}

export default SidebarLinks