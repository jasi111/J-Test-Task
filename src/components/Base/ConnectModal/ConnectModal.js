import React, { useState } from 'react';
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import passwordBox from "../../../assets/passwordBox.png"
import Metamask from "../../../assets/Metamask.png"
import Home from "../../Home/Home"
import { useWeb3 } from '@3rdweb/hooks'//useweb3 give access to the wallet
import { useEffect } from 'react'
import { client } from '../../../lib/sanityClient';
import ConnectingModal from './ConnectingModal'

import "./ConnectModal.css";

// Modal.setAppElement("#root");


function ConnectModal() {

    const { address, connectWallet } = useWeb3()

    useEffect(() => {
        if (!address) return
            // if there is no address just return out of it
            ; (async () => {//if address is there do the following
                const userDoc = {//writing iife - immediately invoked functional expression
                    _type: 'users',
                    _id: address,
                    userName: 'Unamed',
                    walletAddress: address,
                }
                const result = await client.createIfNotExists(userDoc)//requesting to sanity to store the user details if user doesnot exist
            })()

    }, [address])


    return (



        
        <div >
            <img src={passwordBox} alt="" className="passwordBox" />
            <p className="boxTitle">Connect Your Wallet</p>
            <p className="boxDescription">By connecting your wallet, you agree to our terms of service and our privacy policy.</p>

            <div>
                <Link className="metamask-connect-button"  onClick={() => connectWallet('injected')}  >

                    <div className="box-button-flex">
                        <p className="buttonName">Metamask</p>
                        <img src={Metamask} className="meta-mask-icon" alt="connect metamask" />
                    </div>
              </Link>
              {/* <div>
  {connectWallet('injected') ? <Home/> : <ConnectingModal/>
  
   
  
}

          </div> */}
  
          
                <p className="action1Box">Don't have meta mask yet ?</p>
                <Link className="action2Link" to={{ pathname: "https://metamask.io/download/" }} target="_blank" ><p className="action2Box">Download Metamask</p></Link>
            </div>

           
        </div>


    )
}

export default ConnectModal;
