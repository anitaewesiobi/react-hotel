import React from 'react'
import Header from "../Components/Header"
import RoomList from "../Components/RoomList"
import RoomListImg from "../RoomListImg.jpg"
import RoomFilter from '../Components/RoomFilter'

function Rooms() {
    return (
        <React.Fragment>
            <Header
            img={RoomListImg}
             />
             <RoomFilter/>
            <RoomList />
        </React.Fragment>
    )
}

export default Rooms