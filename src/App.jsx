import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import FootBallInfo from "./Components/All Live Matches/FootBallInfo"




function App() {

  return (
    <div>

      <div className='px-2 md:px-16 md:py-2 text-white'>
        <Navbar />
        <FootBallInfo />

      </div>


    </div>
  )
}

export default App
