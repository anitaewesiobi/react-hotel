import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom"
 function NavBar() {
  return (
    <NavWrapper id="nav" className="navbar navbar-expand-md justify-content-center">
        <ul className="nav navbar-nav ml-auto w-100 justify-content-center">
        <li className="nav-item ml-5">
          <Link to="/rooms" className="nav-link">
            Rooms
                        </Link>
        </li>
          <li className="nav-item ml-5 logoname mx-5">
          <Link to="/" className="nav-link">
          Palace Heights
          </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              About Us
                    </Link>
          </li>
        </ul>
    </NavWrapper>
  )
}
const NavWrapper = styled.nav`
background: white;
position: sticky;
top: 0;
z-index:99;

.navbar-brand {
  font-size: 2vw!important;
  color: black!important;
}
.nav-item{
  font-family: var(--pFont);
}
.logoname{
  padding-left: .5rem;
  font-family:var(--hFont);
  font-size: 2.5vw;
  font-weight:700;
}
a:hover{
    text-decoration: underline #37c2c0;
}
    ul {
        margin-left: 15%;
    }
    .nav-link {
        color: black !important;
        font-size: 1.3vw;
        text-transform: capitalize;
        font-weight: 600;
        transition: all hover 1s linear;
    }
    .nav-link:hover{
        font-size: 1.4vw;
        text-decoration: underline #37c2c0;
    }
`
export default NavBar;