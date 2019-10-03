import React, { useContext } from 'react';
import { DataContext } from "../Context";
import Room from "./Room"

function RoomList() {
    const {tempData } = useContext(DataContext);
    return (
       <React.Fragment>
       <div className="container-fluid room-list my-5">
            {tempData.map( room => (
                <Room
                    key={room.sys.id}
                    name={room.fields.name}
                    price={room.fields.price}
                    description={room.fields.description}
                    image={room.fields.images[0].fields.file.url}
                    slug={room.fields.slug}

                />
            ))}
       </div>
       </React.Fragment>
    )
}

export default RoomList
    