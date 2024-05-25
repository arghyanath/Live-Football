import React from 'react'
import { useParams } from 'react-router-dom'
import LeagueTable from '../LeagueTable/LeagueTable'
import { Link } from 'react-router-dom'

const nd = new Date()
const dateConverted = nd.toDateString()

const SameLeagueMatches = ({ data }) => {

    const params = useParams()
    const leagueName = params.leagueName
    const results = data.response.filter(fixture => {
        return fixture.league.name == leagueName
    })


    return (
        < div >

            < div className='flex justify-between items-center mb-4 md:mb-2'>
                <h1 className='text-md md:text-xl font-bold'>MATCHES</h1>
                <div className='px-4 py-0 md:py-1 bg-opacity-0 rounded-md text-textPrimary text-sm'>
                    <p>{dateConverted}</p>
                </div>
            </div>

            <div className='w-full h-[100vh] overflow-y-scroll no-scrollbar'>
                {results.map((element) => (
                    <Link to={`/fixture/${element.fixture.id}`}>
                        <div className='py-1'>
                            <LeagueTable data={element} />
                        </div>
                    </Link>
                )
                )}
            </div>



        </div >

    )

}

export default SameLeagueMatches

