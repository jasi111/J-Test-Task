import React from 'react';
import "./NFTdetails.css"
import Artwork from "../../../../assets/Artwork.png"
import heartIcon from "../../../../assets/heart.png"
import loadIcon from "../../../../assets/load.png"
import threedotsIcon from "../../../../assets/threedot.png"
import ETH from "../../../../assets/ETH.png"
import jumyLogo from "../../../../assets/JumyLogo.png"


function NFTdetails() {
    return (
        <div className="main-flex">

            <div className="nftImageContainer">
                <img alt="" className="artWork"
                    src={Artwork}
                />
            </div>

            <div className="nft-details-container">
                <div className="nftDetails flex-row-vcenter-hsb">

                    <p className="edition">Edition 4/4</p>
                    <div className="iconFlex">
                        <img
                            src={heartIcon}
                            alt="image not found"
                            className="button-group"
                        />
                        <img
                            src={loadIcon}
                            alt="image not found"
                            className="icon-group"
                        />
                        <img
                            src={threedotsIcon}
                            alt="image not found"
                            className="icon-group"
                        />
                    </div>

                </div>

                <div className="nftDetails flex-row-vcenter-hsb">
                    <div>
                        <p className="imageTitle">Idyllic lake</p>
                        <p className="imageDescription">
                            Idyllic Lake is a forward-thinking collection of digital artworks that
                            mixes surrealism and impressionism. There are plenty of subliminal
                            messages embedded in every single artworks that makes it contemplative
                            and very intriguing. This collection features a unique artwork.
                        </p>
                    </div>
                    <img
                        src={jumyLogo}
                        alt="image not found"
                        className="icon-group"
                    />

                </div>


             
                <div className="group-742 flex-row-hsb">

                <div className="flex-col">
   {/* current bid */}
                        <div className="components-badge-small flex-row clip-contents">
                            <p className="txt-794">CURRENT BID</p>
                        </div>
                        <div className="group-481524 flex-row-hsb">
                            <img
                                src={ETH}
                                alt="image not found"
                                className="eth"
                            />
                            <p className="txt-1026">3.50 ETH</p>
                        </div>
                        <p className="txt-518">$ 10.000 USD</p>
                    </div>


                    {/* timer */}
                    <div className="timer-1 flex-col-vsb">
                        <div className="components-badge-small-1 flex-row clip-contents">
                            <p className="current-bid-1">ENDS IN</p>
                        </div>
                        <div className="timer flex-row">
                            <div className="group-481525 flex-col-vsb">
                                <p className="txt-194">19</p>
                                <p className="txt-599">hours</p>
                            </div>
                            <div className="group-481526 flex-col-vsb">
                                <p className="txt-219">26</p>
                                <p className="txt-3106">minutes</p>
                            </div>
                            <div className="group-481527 flex-col-vsb">
                                <p className="txt-311">32</p>
                                <p className="txt-9104">seconds</p>
                            </div>
                        </div>
                    </div>
                </div>

{/* buy button */}
<div className="group-009 flex-row-hsb">
          <div className="components-button-primary-icon-left-icon-left-l clip-contents">
          
            <p className="label flex-hcenter">Buy with ETH</p>
          </div>
          <div className="components-button-tertiary-icon-left-icon-left-l clip-contents">
            <p className="label-1 flex-hcenter">Buy with NFTdetails</p>
          
          </div>
        </div>




            </div>



        </div>


    )
}

export default NFTdetails;

