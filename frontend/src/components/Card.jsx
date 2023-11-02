import React from "react";
import "../styles/card.css";
import Header from "./Header";
import illustration from "../assets/images/healthy_eating.jpg";

function Card() {
  return (
    <div className="cardWrapper">
      <Header />
      <div className="card">
        <aside className="left">
          <div className="heading-wrapper">
            <h2>Your Body</h2>
            <h2>Deserves</h2>
          </div>
          <div className="p-wrapper">
            <p>
              Empowering Health, Defeating Obesity: Your Path to a Healthier
              Tomorrow
            </p>
            <p>
              Analyzing Obesity for a Healthier Lifestyle: Your Keys to Wellness
            </p>
          </div>
          <div className="btn-wrapper">
            <span className="btn btn1">Contact Us</span>
            <span className="btn btn2">Analyze</span>
          </div>
        </aside>
        <aside className="right">
          <img className="image" src={illustration} alt="" srcset="" />
        </aside>
      </div>
    </div>
  );
}

export default Card;
