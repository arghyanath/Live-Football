
import Status from './Status.jsx'
import { Route, Routes } from 'react-router-dom'
import Fixture from '../Fixtures/Fixture.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx'
import SameLeagueMatches from '../FilterLeagues/SameLeagueMatches.jsx'
import { data } from '../../API/FootballApi.js'

import { dummyData } from '../../API/dummy-data.js'

import OtherMatches from '../OtherMatches/OtherMatches.jsx'


const FootBallInfo = () => {

    return (

        <div className="flex  space-x-2">

            <Sidebar data={data} />
            <div className='px-2 md:px-4 md:w-[600px]'>
                <Routes>
                    <Route path='/' element={<Status data={data} />} />
                    <Route path='/fixture/:matchID' element={<Fixture data={data} />} />
                    <Route path='/league/:leagueName' element={<SameLeagueMatches data={data} />} />
                </Routes>
            </div>


            <OtherMatches />



        </div>

    )
}


export default FootBallInfo