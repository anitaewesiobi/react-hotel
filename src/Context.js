import React, { useState, createContext, useEffect } from 'react';
import rooms from "./data"

export const DataContext = createContext();
export function DataProvider(props) {
    const [roomData, setRoomData] = useState(rooms);
    const[tempData, setTempData] = useState(rooms);
    const [featuredRooms, setFeaturedRooms] = useState([]);

    function getRoom(slug){
        return rooms.find(item => {
           return  item.fields.slug === slug;
        })
    }



 useEffect(() => {
     let featuredRooms = rooms.filter(room => room.fields.featured === true);
     setFeaturedRooms(featuredRooms);

 }, [])

    return (
        <DataContext.Provider value={{
            roomData:roomData,
            getRoom: getRoom,
            featuredRooms: featuredRooms,
            setRoomData: setRoomData,
            setTempData: setTempData,
            tempData: tempData
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

