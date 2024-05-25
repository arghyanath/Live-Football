import React from 'react'

const HomeTeamEvents = ({ event, yellowCard, redCard, football, substitution }) => {
    return (
        <div className='w-full flex items-center'>

            <div className='flex items-center space-x-6  text-xs md:text-sm'>
                <p className='text-green-400'>{event.time.elapsed}'</p>

                {event.type === "Card"
                    ?
                    event.detail === "Yellow Card"
                        ? <img className='w-[20px]' src={yellowCard} alt="" />
                        : <img className='w-[20px]' src={redCard} alt="" />

                    :
                    event.type === "subst"
                        ?
                        <img className='w-[25px]' src={substitution} alt="" />

                        : <img className='w-[25px]' src={football} alt="football logo" />
                }

                <div>
                    <p>{event.player.name}</p>
                    <p className='text-gray-400 text-xs'>{event.assist.name}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeTeamEvents