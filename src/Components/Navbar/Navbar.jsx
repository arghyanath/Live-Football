import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import live_football from "../../assets/img/Livefootball.png"


const Navbar = () => {



  return (

    < div className='flex justify-between items-center py-2' >

      <Link to={'/'} onClick={() => (setStatus('Live'))} className='flex items-center space-x-2 hover:scale-95 duration-200'>
        <div className='relative w-[30px] h-[30px]'>
          <img src={live_football} alt="logo" />
        </div>
        <span className='text-2xl font-bold none md:block'>Live Football</span>
      </Link>



    </div >
  )
}

export default Navbar
