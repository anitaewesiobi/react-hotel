import React, {useContext, useState, useEffect} from 'react';
import { DataContext } from '../Context';
import RoomHeader from "../Components/RoomHeader"
import {Gallery, GalleryImage} from "react-gesture-gallery";
import styled from "styled-components";
import arches from "../arches.png"

function SingleRoom(props) {
    const [slug, setSlug] = useState(props.match.params.slug);
    const [index, setIndex] = useState(0)
    const {getRoom} = useContext(DataContext);
    const roomDetails = getRoom(slug);
    const {images, capacity, price, extras, description, name} = roomDetails.fields;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <SingleRoomDetails style={{ background: `url(${arches}) #efefef`}}>
        <RoomHeader
            name={name}
            img={images[0].fields.file.url}
        />
        <div className="container">
            <p className="name-heading text-center">{name}</p>
                <Gallery
                    className="gallery"
                    index={index}
                    onRequestChange={i => {
                        setIndex(i);
                    }}
                >
                    {images.map(image =>
                        <GalleryImage className="gallery-image" src={image.fields.file.url} alt={name}/>
                    )}

                </Gallery>

                <div className="row">
                    {images.map(image =>
                        <img src={image.fields.file.url} alt={name} className="col-3 img-row"/>
                    )}
                </div>
                </div>
            <p className="price text-muted text-center"> STARTING FROM:  <span className="price-tag">$   {price}</span> </p>
            <p className="passenger text-center text-muted">Passengers: <span className="capacity">{capacity} </span></p>
            <div className="container-fluid bottom">
                <div className="description-heading text-center">Description</div>
                <p className="description text-center">{description}</p>
                <p className="extras-heading text-center">Amenities</p>
                <div className="extras-row row">
                {extras.map(extra => (
                    <div className="extra-row my-2 col-4">
                    <span>
                        <i class="fas fa-check-circle"></i>
                    <span className="extra-element">
                                {extra}
                    </span>
                    </span>
                    
                    </div>
                ))}

                </div>
                </div>
        </SingleRoomDetails>
    )
}
export const SingleRoomDetails = styled.div`
.name-heading{
    font-family: var(--hFont);
    color: black;
    font-size: 5rem;
    text-transform: uppercase;
    font-weight: 200;
    margin-bottom: 2rem;
    text-decoration: underline #62D8B1;
}
.gallery{
    padding: 3rem;
    box-shadow: 0px 0px 20px 1px rgba(0,0,0, 0.2);
    background: white!important;
    margin-bottom: 2rem;
}
button{
    background-color: #b7bf5d!important;
        font-family: var(--pFont);
        color:white;
        padding:0.5rem;
        font-weight:900;
        border: #b7bf5d solid 0.01rem;

}
.img-row{
    padding:1rem;
    background-color: white;
}
.bottom{
    background-color: white!important;
    padding-top: 5rem;
}

.price{
    font-family: var(--pFont);
    font-weight:900;
    font-size: 2rem;
    margin: 2rem auto;
}
.price-tag{
    color: rgba(207, 0, 15, 1) !important;
}
.passenger{
    font-family: var(--pFont);
    font-weight:900;
    font-size: 1.5rem;
    margin: 2rem auto;
    text-transform: uppercase;
}
.capacity{
    color: black!important;
}
.description-heading{
    font-family: var(--hFont);
    color: black;
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 2rem;
}
.description{
    font-family: var(--pFont);
    font-weight:900;
    font-size: 1rem;
    color:gray;
    width:65%
    text-justify: center;
    margin: 3rem auto;
}
.extras-heading{
    font-family: var(--hFont);
    color: black;
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 2rem;
}
.fa-check-circle{
color: #b7bf5d!important;
font-size: 1rem;
}
.extra-element{
    color:gray;!important;
    font-family: var(--pFont);
    font-weight:700;
    font-size: 1rem;

}
.extras-row{
    margin: 0 auto 5rem auto;
    width: 70%;
}
`
export default SingleRoom
