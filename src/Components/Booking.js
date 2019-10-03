import React, {useState} from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom";
function Booking() {
    const [checkIn, setCheckIn] = useState("2019-12-01");
    const [checkOut, setCheckOut] = useState("2019-12-07");
    const [guests, setGuests] = useState(1);
    const handleChange = (event) => {
        const{value, name} = event.target;
        if(name === guests){
            setGuests(value);
        }
        if (name === checkIn) {
            setCheckIn(value);
        }
        if (name === checkOut) {
            setCheckOut(value);
        }

    }
    return (
        <BookingWrapper id="booking" className="container">
            <div className="row justify-content-md-center booking-row" >
                        <div className="col-md-3 col-sm-12 booking-box">
                    <p className="text-muted text-center booking-header">CHECK-IN</p>
                    <input type="date" name={checkIn} id="check-in" value={checkIn} onChange={handleChange}/>
                        </div>
                <div className="col-md-3 col-sm-12 booking-box">
                    <p className="text-muted text-center booking-header">CHECK-OUT</p>
                    <input type="date" name={checkOut} id="check-out" value={checkOut} onChange={handleChange}/>
                        </div>
                <div className="col-md-3 col-sm-12 booking-box">
                    <p className="text-muted text-center">GUESTS</p>
                    <input type="number" name={guests} id="guests" min="1" value={guests} style={{ width: "80%", color:"black !important" }} onChange={handleChange}/>
                        </div>
                <div className="col-md-3  col-sm-12 booking-box pt-3 text-center">
                            <Link to="/rooms">
                            <button >VIEW ALL ROOMS</button>
                            </Link>
                        </div>

                    </div>
        </BookingWrapper>
    )
}
export const BookingWrapper = styled.div`
    .booking-row{
    padding: 50px 100px;
    margin-top: -110px;
    background-color: white;
    box-shadow: 0 0 20px 7px rgba(0,0,0, 0.2);
    margin-bottom: 100px;
    }

    p{
        font-family: var(--pFont);
        font-size: 1.5rem;
        font-weight:900;
    }
    .booking-box{
        border-right: solid lightgray 0.01rem;
    }
    input{
        border: none;
        font-family: var(--hFont);
        font-size: 1.2rem;
        display: block;
        text-align: center;
        margin:auto;
        color:black;

    }
    .booking-header{
        padding-right: 2.5rem !important;
    }
    button {
        background-color: #b7bf5d;
        font-family: var(--pFont);
        color:white;
        padding:0.5rem;
        font-weight:900;
        border: #b7bf5d solid 0.01rem;
    }
    input,button:focus{
        outline: none;
    }
    button:hover{
        transform: scale(1.08);
        background-color: #62d8b1!important;
        color: white;
        border:#62D8B1 solid 0.01rem;
    }
    .booking-box:hover{
        text-decoration: double underline aquamarine;
        transform: scale(1.03);
    }
`

export default Booking
