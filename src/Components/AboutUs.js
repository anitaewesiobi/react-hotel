import React from 'react'
import AboutImg from "../AboutImg.jpeg"
import styled from "styled-components"
function AboutUs() {
    return (
        <AboutWrapper className="aboutUs container-fluid">
        <p className="heading text-center">About Us</p>
            <div className="row">
                <div className="col-md-6 story">
                    <p className="title">Our Story</p>
                    <p className="sub-title">Our Accomodations</p>
                    <p className="info">Secluded within the boundaries of exclusive Jimbaran Bay on the island’s southern coast, 
                    the 417-room InterContinental Bali Resort was designed to blend modern convenience with traditional
                     Balinese architecture. Built on the shores of Jimbaran Bay, this hotel in Bali caters to the needs of couples, 
                     families and business travellers alike. You can find amenities from sports to sophisticated dining, 
                     indulgence of Spa Uluwatu and state-of-the-art business services at this luxury Bali beach resort.</p>
                </div>
                <img src={AboutImg} alt="About" className="col-md-6 img-fluid"/>
            </div>
        </AboutWrapper>
    )
}
export const AboutWrapper = styled.div`
margin: 5rem auto;
width: 90%;
.row{
     box-shadow: 0px 0px 20px 1px rgba(0,0,0, 0.2);
     padding: 6rem;
}
.heading{
    font-family: var(--hFont);
    color: gray;
    font-size: 6rem;
    font-weight: 900;
    margin: 3rem auto;
}

.title{
    font-family: var(--pFont);
    color: black;
    font-size: 3rem;
    font-weight: 900;
}
.sub-title{
    font-family: var(--pFont);
    color: rgb(182, 182, 182);;
    font-size: 1.7rem;
    font-weight: 900;
}
.info{
    font-family: var(--pFont);
    color: black;
    font-size: 1rem;
    font-weight: 400;
}


`
export default AboutUs
