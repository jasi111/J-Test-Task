import React, { useState, useEffect } from 'react';
import Modal from "react-modal";
import { Link } from 'react-router-dom';

import "./Modal.css"
import {
  Nav,
  NavbarSections,
  JumyLogo,
  BETA,
  SearchBox,
  SearchIcon,
  SearchText,
  NavLink,
  NavLink1,
  NavLink2,
  NavLeftButton,
  ComponentsLogoJumyLogo,
  Label2,
  Label,
  ComponentsIconsGeneral20px,
  Ellipse10,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarStyleElements';
import logo from "../../../assets/jumy.png"
import user from "../../../assets/userIcon.png"
import graphIcon from "../../../assets/graphIcon.png"


import closeButton from "../../../assets/close.png"
import searchIcon from "../../../assets/searchIcon.png"
import ConnectingModal from '../ConnectModal/ConnectModal';
import ConnectModal from '../ConnectModal/ConnectModal';

import { useWeb3 } from '@3rdweb/hooks'//useweb3 give access to the wallet
import { client } from "../../../lib/sanityClient"
import Home from '../../Home/Home';

const Navbar = () => {

  const { address, connectWallet } = useWeb3()


  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);


  }

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
    <div>
      <Nav>
        <NavbarSections>
          <JumyLogo>
            <Link to="/">

              <ComponentsLogoJumyLogo
                src={logo}
              />
            </Link>

            <BETA>BETA</BETA>
          </JumyLogo>

          <SearchBox>
            <SearchIcon
              src={
                searchIcon
              }
            />
            <SearchText>Search art or artists...</SearchText>
          </SearchBox>
          <NavLink to="/explore">
            <Label2>Explore</Label2>
            {/* <Label1>Explore</Label1> */}
          </NavLink>
          <NavLink1 to="/drops">
            <Label2>Drops</Label2>
            {/* <Label1>Drops</Label1> */}
          </NavLink1>
          <NavLink2 to="/community">
            <Label2>Community</Label2>
          </NavLink2>
          {/* <Link to="">

<img
  src={graphIcon}
/>
</Link> */}
          {/* <NavLink to="">

              <img
                src={user}
              />
            </NavLink> */}
           
          <NavLeftButton>
            {address ? (
              <div>
                <Ellipse10 />
                <ComponentsIconsGeneral20px
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/bbf996d2-0c98-4892-893d-2abd8fc3effb.svg?alt=media&token=2e648a1b-5237-4aab-8d77-1b824241b60d"
                  }
                />
                <Label>Become a Collector</Label>

              </div>
            ) : (
              <Link onClick={toggleModal} to="/connect">
                <Ellipse10 />
                <ComponentsIconsGeneral20px
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/bbf996d2-0c98-4892-893d-2abd8fc3effb.svg?alt=media&token=2e648a1b-5237-4aab-8d77-1b824241b60d"
                  }
                />
                <Label>Connect Wallet</Label>

              </Link>

            )}
          </NavLeftButton>
        </NavbarSections>
      </Nav>

      <div className="modal-container">
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          // style={customStyles}
          className="modal"
          contentLabel="My dialog"
        >
          <div className="modalButton">
            <NavLink className="breedButton" onClick={toggleModal} to={`/`}>
              <img src={closeButton} className="close-button" alt="close" />
            </NavLink>

          </div>
          <div>
     
            <ConnectModal/> 
          

          </div>
       

        </Modal>
      
      </div>
    </div>
  );
};



export default Navbar;