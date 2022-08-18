import React from "react";
import Header from "./../images/header.svg";
import SubImage1 from "./../images/subheader1.svg";

export default function NavBar() {
  return (
    <div>
      <img src={Header} alt="Tata Steel Title" />
      <div style={{display:"flex", paddingLeft:"16px", paddingRight:"16px"}}>
        <img src={SubImage1} alt="Sub Title1" style={{ marginRight: "20px" }} />
        {/* <img src={SubImage2} alt="Sub Title2" /> */}
        <div
          style={{ backgroundColor: "#39405b", height: "116px", width: "100%",  }}
        >
        <p style={{color:"white",textAlign:"center", fontSize:"37px", justifyContent:"center"}}>  LME Daily LIVE Data Feed (For DNF) </p>
        </div>
      </div>
    </div>
  );
}
