import React from "react";
import Heroimg from "../images/Heroimg.png";

export default function Hero() {
  return (
    <section className="HeroContent">
      <div className="HeroTag">
        <p>#Bar</p>
        <p>#Gericht</p>
      </div>
      <div className="Heroheading">
        <h3>Chase The New Flavour</h3>
    
        <h1>The Key To Fine Dining</h1>
        <p>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button>Explore</button>
      </div>
      <div className="Heroimage">
        <img src={Heroimg} alt="image" />
      </div>
    </section>
  );
}
