import React from 'react'
import styled from "styled-components"
import Booking from "./Booking"
function RoomHeader({name, img}) {
    return (
        <React.Fragment>
            <RoomHeaderWrap id="RoomHeader" className="text-center" style={{ background: `url(${img}) bottom`, backgroundSize:"cover" }}>
                <div className="header-textback">
                    <p className="text-center header-heading">
                        Monalisa Hotel
            </p>
                    <p className="heading-sub text-center">
                        {name}
            </p>
                </div>
            </RoomHeaderWrap>
            <Booking />
        </React.Fragment>
    )
}
export const RoomHeaderWrap = styled.nav`
    padding-bottom:19rem;
    padding-top:19rem;
    letter-spacing: 0.1rem;
    color: white;
    height: 50vh;
    .header-textback{
        width: 60%;
        display:  inline-block;
        background-color: rgba(0,0,0,0.2);
        box-shadow:0 0 20px 7px rgba(0,0,0, 0.2);
        margin-top:-100px;
    }
    .header-heading{
        font-family: var(--hFont);
        font-size: 5.5rem;
        font-weight: 900;
    }
    .heading-sub{
        font-family: var(--pFont);
        font-size: 2rem; 
        font-weight: 900;
        text-transform: capitalize;
    }
  #RoomHeader{
  margin-top: 1rem;
  font-family: var(--hFont);
  color:white;
  }
`
export default RoomHeader

