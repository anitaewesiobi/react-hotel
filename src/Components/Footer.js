import React from 'react'
import styled from "styled-components"

function Footer() {
    return (
        <FooterWrapper id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <p>Palace Heights</p>
                        <p className="text-justify-center">This Hotel booking website is supplied to you by Anita Ewesiobi. For any hiring inquiries, contact Anita Ewesiobi directly through email, phone or linkedin.</p>
                    </div>
                    <div className="col-md-3">
                        <p>Quality Stays</p>
                        <p>Luxury Designs</p>
                        <p>Top Service</p>
                        <p>Highly Rated</p>
                    </div>
                    <div className="col-md-3">
                        <p><i className="fas fa-phone-square footer-icon"></i>+1 123 456 789</p>
                        <p><i className="fas fa-phone-square footer-icon"></i>+1 123 456 789</p>
                        <p><i className="fas fa-envelope footer-icon"></i>contact@website.com</p>
                        <p><i className="fas fa-home footer-icon"></i>xyz Road, xyz Complex</p>

                    </div>
                    <div className="col-md-3">
                        <p><i className="fab fa-facebook-f footer-icon"></i>Facebook</p>
                        <p><i className="fab fa-youtube footer-icon"></i>Youtube</p>
                        <p><i className="fab fa-linkedin footer-icon"></i>Linkedin</p>
                        <p><i className="fab fa-twitter footer-icon"></i>Twitter</p>
                    </div>
                </div>
                <hr />
                <p className="copyright text-center"><i className="far fa-copyright"></i> Copyright 2019 Made by Anita Ewesiobi </p>
            </div>
        </FooterWrapper>
    )
}
export const FooterWrapper = styled.div`
font-family: var(--pFont);
font-size: 0.8rem !important;
background-color: #666666;
color: white!important;
margin-bottom: 0!important;
padding: 2rem;

#footer {
    margin-top: 80px;
    padding: 100px;
    background-color: black;
    color: white!important;
}
.footer-logo .fab{
    font-size: 50px;
    margin-top: 5px;
    margin-bottom: 15px;
    text-align: left;
    margin-right:10px;

}
.footer-logo {
     font-size: 30px;
    margin-top: 5px;
    margin-bottom: 15px;
    text-align: left;
     margin-right:10px;
}

#footer h3 {
    font-size: 15px;
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: left;
}
#footer p {
    font-size: 12px;
    text-align: left;
}

.footer-icon {
    padding-right:20px;
    font-size: 15px; 
}

`
export default Footer
