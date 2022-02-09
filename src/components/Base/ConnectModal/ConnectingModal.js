import React, { useState } from 'react';
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import passwordBox from "../../../assets/passwordBox.png"
import Metamask from "../../../assets/Metamask.png"
import Home from "../../Home/Home"
import { useWeb3 } from '@3rdweb/hooks'//useweb3 give access to the wallet
import { useEffect } from 'react'
import { client } from '../../../lib/sanityClient';
import "./ConnectModal.css";


import "./ConnectModal.css";

// Modal.setAppElement("#root");


function ConnectModal() {

    return (

        <div >
            <img src={passwordBox} alt="" className="passwordBox" />
            <p className="boxTitle">Metamask Not Detected</p>
            <p className="action1Box">Don't have meta mask yet?</p>
                <Link className="action2Link" to={{ pathname: "https://metamask.io/download/" }} target="_blank" >
                    <p className="action2Box">Download Metamask</p>
                    </Link>

                  
        
        </div>

    )
}

export default ConnectModal;
