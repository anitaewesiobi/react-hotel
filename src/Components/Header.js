import React from 'react'
import styled from "styled-components"
import Booking from "./Booking"
function Header({img}) {
    return (
        <React.Fragment>
            <HeaderWrapper id="HeaderWrapper" className="text-center" style={{ background: `url(${img}) center`, backgroundSize: "cover" }}>
        <div className="header-textback">
            <p className="heading-sub text-center">
                Welcome To The Renowned
            </p>
            <p className="text-center header-heading">
                Palace Heights Hotel
            </p>
            <p className="heading-sub text-center">
                A Place To Enjoy And Experience Life
            </p>
        </div>
        </HeaderWrapper>
        <Booking/>
        </React.Fragment>
    )
}
export const HeaderWrapper = styled.nav`
    padding-bottom:19rem;
    padding-top:19rem;
    letter-spacing: 0.1rem;
     color:white !important;
    #HeaderWrapper{
        height: 75vh;
        margin-top: 1rem;
        background-position: center;           
        background-attachment: fixed;
        font-family: var(--hFont);
    }
    .header-textback{
        width: 60%;
        margin: 0 50px;
        display:  inline-block;
        background-color: rgba(0,0,0,0.2);
        box-shadow:0 0 20px 7px rgba(0,0,0, 0.2);
    }
    .header-heading{
        font-family: var(--hFont);
        font-size: 5.5rem;
        font-weight: 900;
    }
    .heading-sub{
        font-family: var(--pFont);
        font-size: 1.5rem; 
        font-weight: 900;
    }
`
export default Header

