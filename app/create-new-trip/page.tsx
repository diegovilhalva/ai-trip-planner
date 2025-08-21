import React from 'react'
import ChatBox from './_components/ChatBox'
import Itinerary from './_components/Itinerary'

const CreateNewTrip = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10">
        <div className="">
            <ChatBox />
        </div>
        <div className="">
          <Itinerary />
        </div>
    </div>
  )
}

export default CreateNewTrip