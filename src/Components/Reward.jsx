import React from 'react'
import Group3 from "../images/Group3.png"

export default function Reward(props) {
  return (
    <div className='mainrewardsection'>
    <div className='rewardimage'>
        <img src={props.img} alt="image2" />
    </div>
    <div className='rewardtext'>
        <h3>Bib Gourmod</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing e</p>
    </div>

    </div>
  )
}
