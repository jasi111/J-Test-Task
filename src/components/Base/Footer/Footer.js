import React from "react"
import "./Footer.css"
import border from "../../../assets/border.png"
import topIcon from "../../../assets/topIcon.png"

export default function Footer() {
    return (
        <div className="footer-container">


            <h2 className="footer-title">Are You an Artist</h2>
            <button link="" className="tellus-button">Tell us about you</button>
          
            <div className="footer-flex-row">                
                <div className="footer-address">
                <p >The Offices 4, One Central <br/> Dubai, United Arab Emirates</p>
                </div>
                <div className="footer-email">
                <p >hello@jumy.co</p>
                </div>
                <div className="footer-social">
                <p className="footer-rightside-flex-row" >Instagram</p>
                <p className="footer-rightside-flex-row" >Twitter</p>
                <p className="footer-rightside-flex-row">Blog</p>
                </div>

                
               
            
          
            </div>

            <img src={border} className="footer-border"/>

            <div className="footer-flex-bottom-row">  
            <div className="footer-address">
                <p>All rights reserved</p>
                </div>
                <div className="footer-email">
               <img src={topIcon} alt="" className="topIcon"/>
                </div>
                <div className="footer-social">
                <p className="footer-rightside-flex-row" >FAQ</p>
                <p className="footer-rightside-flex-row">Terms</p>
                <p className="footer-rightside-flex-row">Policy</p>
                </div>

           </div>
        </div>
    )
}