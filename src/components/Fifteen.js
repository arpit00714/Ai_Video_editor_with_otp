import { AiOutlineLogout } from "react-icons/ai";
import "./Fifteen.css";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { headerAtom } from "./headerAtom";

const Fifteen = () => {
    const[open,setOpen] = useState(false);
    const headerName = useRecoilValue(headerAtom);
  return (
    <>
    <div style={{position:"sticky", top:"0px", zIndex:"9999"}} className="start">
      
        <button style={{background:"none",border:"none", fontSize:"20px"}} onClick={()=>setOpen(!open)} ><FaBarsStaggered /></button>
        <h2>{headerName}</h2>
        <img src="images/men6.jpg" alt="Profile" />
      </div>
      <div style={{marginTop:"90px", left:`${open ? "0px" : "-250px"}`, zIndex:"9999"}} class="sidebar">
        <div class="menu">
          <div class="menu-item">
            <span class="icon">🎥</span>
            <span>Trained Videos</span>
          </div>
          <div class="menu-item">
            <span class="icon">📹</span>
            <span>Templates</span>
          </div>
          <div class="menu-item">
            <span class="icon">🗂</span>
            <span>Compositions</span>
          </div>
          <Link to="">
            <button class="create-button">+ Create New Video</button>
          </Link>
        </div>
        <div class="logout">
          <span class="icon">
            <AiOutlineLogout />
          </span>
          <Link
            to="/fourteen"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Fifteen;
