import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";

HeroBanner;

function home() {
  return (
    <div className="homePage">
      <HeroBanner />
    </div>
  );
}

export default home;
