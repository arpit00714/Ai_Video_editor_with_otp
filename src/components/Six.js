import "./Six.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { LuCheckCircle } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { headerAtom } from "./headerAtom";
import { useEffect } from "react";
const Six = () => {
  const setHeaderName = useSetRecoilState(headerAtom)

  useEffect(()=>{
    setHeaderName("AI Setup")
  },[])

  return (
    <>
  

      <div className="camy">
        <p>
          <LuCheckCircle />
        </p>
      </div>
      <div className="textrr">
        <p>
          Your AI Model Setup Has Been
          <br /> Completed Successfully
        </p>
      </div>

      <div className="gene11">
        <Link to="/Seven" style={{textDecoration:'none'}}>
        <button>+Create Your First Video</button>
        </Link>
      </div>
    </>
  );
};
export default Six;
