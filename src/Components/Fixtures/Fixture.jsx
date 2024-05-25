import React from 'react'
import { useParams } from 'react-router-dom'
import Competitions from '../LeagueTable/Competitions';
import Matches from '../LeagueTable/Matches';
import football from '../../assets/img/football.svg'
import red_card from '../../assets/img/Red_card.png'
import yello_card from '../../assets/img/Yellow_card.png'
import substitution from '../../assets/img/substitution.png'
import HomeTeamEvents from './HomeTeamEvents';
import AwayTeamEvents from './AwayTeamEvents';
import MatchDetails from './MatchDetails';

const Fixture = ({ data }) => {

    const params = useParams();
    const matchId = params.matchID
    const results = data.response.filter(match => {
        return match.fixture.id == matchId
    })
    const fixture = results[0]


    return (

        <div className='h-[100vh] overflow-y-scroll no-scrollbar'>

            <div className='py-3 px-2 md:px-3 rounded-md flex flex-col bg-black bg-opacity-35 mb-2 '>
                <Competitions data={fixture} />
                <Matches data={fixture} />
                <p className='text-center text-sm text-green-400  pt-1'>{fixture.fixture.status.elapsed}'</p>
                <p className='text-center text-xs'>{fixture.fixture.status.long}</p>

                <div className='mt-8 mb-4 flex justify-center items-center py-1
            bg-gray-300 bg-opacity-20 rounded-md'>
                    <p className='  text-xs md:text-sm'>Events</p>
                </div>

                <div>
                    {!fixture.events ? null : fixture.events.map(event => (

                        <div key={event.team.id} className='py-3'>

                            {event.team.name === fixture.teams.home.name
                                ? <HomeTeamEvents event={event} football={football} yellowCard={yello_card} redCard={red_card} substitution={substitution} />
                                : <AwayTeamEvents event={event} football={football} yellowCard={yello_card} redCard={red_card} substitution={substitution} />
                            }

                        </div>
                    ))}
                </div>

                <div className='pt-4'>
                    <MatchDetails fixture={fixture} />
                </div>



            </div>


        </div>




    )
}

export default Fixture