import { Link } from "react-router-dom";
import "./Five.css";

import { FaCirclePlay } from "react-icons/fa6";
const Five = () => {
  return (
    <>
      <div className="containers">
        <div className="contentb">
          <img src="image/sam.avif" />

          <div className="content11">
            <button className="close-btn21">
              <p>
              <FaCirclePlay />
              </p>
            </button>
            <input className="range-slid" type="range" />
          </div>

          <div className="content22">
            <Link to="/Four" className="shut">
           
              Retake

            </Link>
            <Link to="/Six" className="btn20" >
              Generate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Five;
