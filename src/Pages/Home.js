import React from 'react'
import Header from "../Components/Header"
import FeaturedRooms from "../Components/FeaturedRooms";
import HeaderImg from "../HeaderImg.jpg"
import AboutUs from "../Components/AboutUs"
import styled from "styled-components"
import arches from "../arches.png"
function Home() {
    return (
        <HomeWrapper style={{ background: `url(${arches})` }}>
            <Header
                img={HeaderImg}
            />
           <FeaturedRooms/>
           <AboutUs/>
        </HomeWrapper>
    )
}
export const HomeWrapper = styled.div`

`
export default Home
