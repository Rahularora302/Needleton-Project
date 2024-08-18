import React from "react";
import { useEffect,useState } from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import kiarra from "../../../assets/kiarra.png";
import Category from "../Category/Category";
import {useNavigate} from "react-router-dom";

import { useRef } from "react";
const Banner = () => {
  const navigate = useNavigate();
 /*<div className="ctas">
                        <div className="banner-cta">Read More</div>
       <button className="banner-cta v2" >Shop Now</button>
                       
                    </div>*/
  
    return (

        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>needleton</h1>
                    <p>
                       a  home for a stylish you
                    </p>
                    
                </div>
                
                <img className="banner-img" src={kiarra} />
            </div>
        </div>
       
        
    );
};

export default Banner;
