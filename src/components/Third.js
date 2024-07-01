import "./Third.css";
// import { FaBarsStaggered } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { headerAtom } from "./headerAtom";
const Third = () => {
  const setHeaderName = useSetRecoilState(headerAtom)

  useEffect(()=>{
    setHeaderName("AI Setup")
  },[])


  return (
    <>
      <div className="cam1">
        <div className="cam">
        <Link to="/Four">
          <p>
            <FaCamera />
          </p>
          </Link>
        </div>
      </div>
      <div className="text">
        <p>
          Click on the Button to Train
          <br /> Your AI Model
        </p>
      </div>
    
    </>
  );
};
export default Third;
