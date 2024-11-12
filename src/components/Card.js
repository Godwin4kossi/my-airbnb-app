import React from "react";
import swim from "../image 12.png";
import star from "../Star 1.png";
import bike from "../mountain-bike 1.png";
import wedding from "../wedding-photography 1.png";



export default function Card(props) {
  return (
    <main className="experience-container">
      <div className="card-container">
        {/* <img src={`../images/${props.img}`} className="swimmer-image" /> */}
        <img src={swim} alt="Hero-Image" className="swimmer-image" />
        <p className="availability">SOLD OUT</p>
        <p className="rating">
          <img src={star} alt="Hero-Image" className="icon-image" /> 5.0{" "}
          <span>({props.reviewCount}).{props.country}</span>
        </p>
        <p className="rating-description">{props.title}</p>
        <h6 className="pricing">
          From ${props.price } <span>/ person</span>
        </h6>
      </div>
      <div className="card-container">
        {/* <img src={`../images/${props.img}`} className="swimmer-image" /> */}
        <img src={bike} alt="Hero-Image" className="swimmer-image" />
        <p className="availability">SOLD OUT</p>
        <p className="rating">
          <img src={star} alt="Hero-Image" className="icon-image" /> 5.0{" "}
          <span>({props.reviewCount}).{props.country}</span>
        </p>
        <p className="rating-description">{props.title}</p>
        <h6 className="pricing">
          From ${props.price } <span>/ person</span>
        </h6>
      </div>
      <div className="card-container">
        {/* <img src={`../images/${props.img}`} className="swimmer-image" /> */}
        <img src={wedding} alt="Hero-Image" className="swimmer-image" />
        <p className="availability">SOLD OUT</p>
        <p className="rating">
          <img src={star} alt="Hero-Image" className="icon-image" /> 5.0{" "}
          <span>({props.reviewCount}).{props.country}</span>
        </p>
        <p className="rating-description">{props.title}</p>
        <h6 className="pricing">
          From ${props.price } <span>/ person</span>
        </h6>
      </div>
    </main>
  );
}
