import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

function Room({name, price, image, description, slug}) {
    return (
        <RoomWrapper>
            <div className="room-row row my-5">
                <div className="col-md-6 details-col pl-lg-5">
                    <p className="room-title">
                        {name}
                    </p>
                    <span className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i><span className="reviews">   {Math.floor(Math.random() * 90)} Reviews</span>
                        </span>
                    <p className="room-price">
                        Start from 
                        <span className="price-tag">  $ {price}</span>
                        <span className="price-end">  /Night</span>
                    </p>
                    <p className="room-details mr-lg-5 mr-sm-0">
                        {description}
                    </p>
                    <Link to={`/rooms/${slug}`}>
                    <button className="view-details mb-5">
                        View Details         <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i>
                    </button>
                    </Link>
                </div>
                <img src={image} alt="" className="col-md-12 col-lg-6 room-img"/>
            </div>
        </RoomWrapper>
    )
}
export const RoomWrapper = styled.div`
    .room-title{
        font-family: var(--hFont);
        font-size: 3rem;
        font-weight:900;
        color:black;
        text-transform: capitalize;
    }
    .room-price{
        font-family: var(--pFont);
        font-size: 1.5rem;
        font-weight: 900;
        color: lightgray;
    }
    .price-tag{
        color: rgba(207, 0, 15, 1) !important;
    }
    .price-end{
        color: black!important;
    }
    .room-details{
        font-family: var(--pFont);
        color: gray;
        font-size: 1rem;
        font-weight:500;
    }
    button{
        border: #b7bf5d solid 0.01rem;
        font-family: var(--pFont);
        font-weight: 900;
        padding: 0.9rem;
        background-color: #b7bf5d;
        color:white;
    }
    button:hover{
        background-color: #62D8B1;
        border: #62D8B1 solid 1px;
        transform:scale(1.1);
    }
    
    .rating{
        color:gold;
        font-size:1rem;

    }
    .reviews{
        font-family: var(--pFont);
        color: gray;
        font-size: 1rem;
        font-weight:800;

    }
    
`
export default Room
