import React from 'react'


const MatchDetails = ({ fixture }) => {
    return (
        <div className='text-sm'>


            <div className='py-1 px-2'>Referee : {fixture.fixture.referee}</div>
            <div className='py-1 px-2'>Venue   : {fixture.fixture.venue.name}</div>
            <div className='py-1 px-2'>Country : {fixture.league.country}</div>
            <div className='py-1 px-2'>Round   : {fixture.league.round}</div>
            <div className='py-1 px-2'>Season  : {fixture.league.season}</div>

        </div>
    )
}

export default MatchDetails