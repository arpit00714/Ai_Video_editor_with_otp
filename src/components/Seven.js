import "./Seven.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { TbFileUpload } from "react-icons/tb";
import { AiTwotoneAudio } from "react-icons/ai";
import { LiaRobotSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { headerAtom } from "./headerAtom";
import { useEffect } from "react";

const Seven = () => {
  const setHeaderName = useSetRecoilState(headerAtom)

  useEffect(()=>{
    setHeaderName("Create Video")
  },[])

  return (
    <>
    
      <div className="containermm">
        <div className="boxqq">
          <h1>
            <TbFileUpload />
          </h1>
          <Link to="/Eight" style={{ textDecoration: "none" }}>
            <p>Write Text</p>
          </Link>
        </div>
        <div className="boxqq">
          <h1>
            <TfiWrite />
          </h1>
          <Link to="/Eight" style={{ textDecoration: "none" }}>
            <p>File Upload</p>
          </Link>
        </div>
        <div className="boxqq">
          <h1>
            <AiTwotoneAudio />
          </h1>
          <Link to="/Eight" style={{ textDecoration: "none" }}>
            <p>Record Audio</p>
          </Link>
        </div>
        <div className="boxqq">
          <h1>
            <LiaRobotSolid />
          </h1>
          <Link to="/Eight" style={{ textDecoration: "none" }}>
            <p>AI Generate</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Seven;
