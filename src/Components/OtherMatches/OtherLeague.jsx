import React from 'react'


const OtherLeague = ({ data, status }) => {

    const date = new Date(data.fixture.date)
    const matchTimings = date.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    })
    return (
        <div className='py-3 px-2 md:px-3 rounded-md flex flex-col bg-black  bg-opacity-35 mb-2 duration-200 hover:scale-95 text-xs'>

            <div className='mb-4 flex justify-between items-center px-4 py-1'>
                <div className='flex space-x-4'>
                    <img src={data.league.logo} alt={data.league.name} width={20} height={20} />
                    <p>{data.league.name}</p>
                </div>

            </div>

            <div className='grid grid-cols-3'>
                <div className='w-full flex items-center'>
                    <div className='w-[40px] h-[40px] relative mr-2'>
                        <img src={data.teams.home.logo} alt={data.teams.home.name}
                            className='obect-cover' />
                    </div>
                    <p className='text-right'>{data.teams.home.name}</p>
                </div>

                <div className=' px-2 m-auto flex justify-center items-center  bg-gray-300 bg-opacity-20 rounded-md'>
                    <p > {status === 'FT' ? <div>{data.goals.home} : {data.goals.away} </div> : <div>{matchTimings}</div>} </p>
                </div>

                <div className='w-full flex items-center justify-end'>
                    <p className='text-right'>{data.teams.away.name}</p>
                    <div className='w-[40px] h-[40px] relative ml-2'>
                        <img src={data.teams.away.logo} alt={data.teams.away.name}
                            className='obect-cover' />
                    </div>
                </div>

            </div>

            <p className='text-center'>{data.fixture.status.long}</p>
        </div>
    )
}

export default OtherLeague