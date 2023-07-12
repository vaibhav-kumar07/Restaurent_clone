import React from 'react';
import chef from "../images/chef.png"

export default function Chef() {
  return (
    <section className='HeroContent chefcontent'>
    
        <div className='Heroimage'>
            <img src={chef}  className ="chefimage"alt="images" />
        </div>
        <div className="Heroheading chefheading">
        <h3>Chase The New Flavour</h3>
        <h1>The Key To Fine Dining</h1>
        <p>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button>Explore</button>
      </div>
    </section>
  )
}
