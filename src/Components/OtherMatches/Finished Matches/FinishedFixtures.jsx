import React from 'react'

import LeagueTable from '../../LeagueTable/LeagueTable'
import OtherLeague from '../OtherLeague'

const FinishedFixtures = ({ data }) => {

    const fixture = data.response.filter(match => {
        return match.fixture.status.short == 'FT'
    })

    return (
        <div>
            {fixture.map((fixture) => (

                <div className='py-1' key={fixture.fixture.id} >
                    <OtherLeague status={'FT'} data={fixture} />
                </div>
            ))}
        </div>
    )
}

export default FinishedFixtures