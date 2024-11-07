import React from "react";
import Group77 from "./Group77.png"

export default function Hero() {
  return (
    <>
      <div className="hero">
        <img src={Group77} alt="Hero-Image" className="hero-img" />
      </div>

      <div className="hero-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </>
  );
}
