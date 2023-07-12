import React from "react";
import knife from "../images/knife.png";
import Aboutus from "./Aboutus";

export default function About() {
  

  return (
    <section className="About">
      <Aboutus title="about us" />
      <div className="knifeimage">
        <img src={knife} alt="knifeimage" />
      </div>
      <Aboutus title="Our History" />
    </section>
  );
}
