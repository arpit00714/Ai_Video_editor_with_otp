import React from "react";
import "./Eight2.css";
import {Link} from "react-router-dom"
import { FaChevronLeft, FaLinkedinIn } from "react-icons/fa";
import { PiDotsThreeOutlineBold } from "react-icons/pi";

const Eight2 = () => {
  return (
    <>
      <div className="startipad">
        <Link to="/Eight"style={{textDecoration:"none", color:"gray"}}>
        <h2>
          <FaChevronLeft />
        </h2>
        </Link>
        <h1> Create Video</h1>
        <img src="images/men6.jpg" />
      </div>
    
      <center>
        <br />
        <p1> Recording Audio</p1>
        <br /> <br />
        <div className="mainipad">
          <Link to="/nine" style={{textDecoration:"none", color:"black"}}>
          <p>
            <PiDotsThreeOutlineBold />
          </p></Link>
        </div>
      </center>
    </>
  );
};

export default Eight2;
