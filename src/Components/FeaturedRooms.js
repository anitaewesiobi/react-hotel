import React, {useContext} from 'react'
import {DataContext} from "../Context";
import {Link } from "react-router-dom"
import styled from "styled-components";

function FeaturedRooms() {
   const {featuredRooms} = useContext(DataContext);
    return (
        <Featured>
        <p className="title text-center">Featured Rooms</p>
        <div className="container-fluid">
            <div className="row text-center">
                    { featuredRooms.map( item => (
                        <div className=" col-md-4 card p-2 ">
                        <div className="img-container">
                            <Link to={`/rooms/${item.fields.slug}`}>
                                <img src={item.fields.images[0].fields.file.url} alt='room' className="card-img-top img-fluid" />
                            </Link>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-4">
                                        <p className="align-self-center mb-0 name">
                                            {item.fields.name}
                                        </p>
                                </div>
                                <div className="col-md-4">
                                        <span className="mr-1">
                                            <span className="text-muted"> Starting From  </span>
                                            <span className="mb-0 price">
                                                $ {item.fields.price}
                                            </span>
                                        </span>
                                </div>
                                <div className="col-md-4">
                                        <Link to={`/rooms/${item.fields.slug}`}>
                                            <button>
                                                View Details<i className="fa fa-arrow-right ml-2" aria-hidden="true"></i>
                                            </button>
                                                
                                        </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
        </Featured>
    )
}
export const Featured = styled.div`

    .title{
    font-family: var(--hFont);
    color: gray;
    font-size: 6rem;
    font-weight: 900;
    margin: 3rem auto;
    }
    .card{
    box-shadow: 0px 0px 20px 1px rgba(0,0,0, 0.2);
     padding: 6rem;
    }
    .name{
     font-family: var(--pFont);
    color: black;;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: capitalize;

    }
    .price{
    font-family: var(--pFont);
    color: rgba(207, 0, 15, 1) !important;
    font-size: 1rem;
    font-weight: 700;
    }
    .text-muted{
       font-weight: 700; 
    }
    button{
   background-color: #b7bf5d;
        font-family: var(--pFont);
        color:white;
        padding:0.5rem;
        font-weight:900;
        border: #b7bf5d solid 0.01rem;
        font-size: .8rem;
    }

    button:hover{
        transform: scale(1.08);
        background-color: #62d8b1!important;
        color: white;
        border:#62D8B1 solid 0.01rem;
    }

`

export default FeaturedRooms
