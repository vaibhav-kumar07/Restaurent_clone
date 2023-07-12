import React from 'react';
import  MaskGroup from "../images/MaskGroup.png";
import Reward from './Reward';
import spooncross from "../images/spooncross.png";
import Group1 from "../images/Group1.png"
import Group2 from "../images/Group2.png"
import Group3 from "../images/Group3.png"
import Group5 from "../images/Group5.png"

const rewardimages = [Group1,Group2,Group3,Group5];

export default function ChefWord() {

  return (
    <>
    <section className='chefWords'>
        <div className='reward'>
   <img src={spooncross} alt="" />
        </div>
        <div className='rewardtexts'>
           <h3>Award & Recognition</h3>
           <h1>Our Laurels</h1>
           <div className='rewardarea'>
        {rewardimages.map((image)=>(
             <Reward img={image} />
        ))}
           </div>
        </div>
     <div className='tomotoimage'>
        <img src={MaskGroup} alt="" />
     </div>
    </section>
    </>
   
  )
}
