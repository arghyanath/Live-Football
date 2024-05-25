import React from 'react'

import OtherLeague from '../OtherLeague'
const UpcomingFixtures = ({ data }) => {

    const fixture = data.response.filter(match => {
        return match.fixture.status.short == 'NS'
    })


    return (
        <div>

            {fixture.map((fixture) => (
                <div className='py-1' key={fixture.fixture.id} >
                    <OtherLeague data={fixture} status={'NS'} />
                </div>
            ))}
        </div>
    )
}

export default UpcomingFixtures