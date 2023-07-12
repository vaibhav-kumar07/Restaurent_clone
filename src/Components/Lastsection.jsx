import React from 'react';
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png"
 
export default function Lastsection() {
  return (
    <section className='lastsection'>
        <div className='lastsectionicons'>
            <img src={twitter} alt="" />
            <img src={facebook} alt=""/>
            <img src={instagram} alt=''/>
        </div>
        <h5>2021 Gericht .All Rights Reserved .</h5>
    </section>
  )
}
