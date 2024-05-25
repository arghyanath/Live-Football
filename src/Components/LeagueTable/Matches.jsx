import React from 'react'

const Matches = ({ data }) => {

    return (
        <div className='grid grid-cols-3'>
            <div className='w-full flex items-center'>
                <div className='w-[40px] h-[40px] relative mr-2'>
                    <img src={data.teams.home.logo} alt={data.teams.home.name}
                        className='obect-cover' />
                </div>
                <p className=' text-xs md:text-sm text-right'>{data.teams.home.name}</p>
            </div>

            <div className=' px-2 m-auto flex justify-center items-center  bg-gray-300 bg-opacity-20 rounded-md'>
                <p className='text-sm'>{data.goals.home} : {data.goals.away}</p>
            </div>

            <div className='w-full flex items-center justify-end'>
                <p className=' text-xs md:text-sm text-right'>{data.teams.away.name}</p>
                <div className='w-[40px] h-[40px] relative ml-2'>
                    <img src={data.teams.away.logo} alt={data.teams.away.name}
                        className='obect-cover' />
                </div>
            </div>

        </div>
    )
}

export default Matches