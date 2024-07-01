import { FaChevronLeft } from "react-icons/fa";
import { ImPlay3 } from "react-icons/im";
import "./Nine.css";
import { Link } from "react-router-dom";
const Nine = () => {
  return (
    <>
      <div className="startasl">
      <Link to="/Eight2">
        <p>
          <FaChevronLeft />
        </p>
        </Link>
        <h1> Create Video</h1>
        <img src="images/men6.jpg" />
      </div>

      <center>
        <br />

        <p1> Preview Audio</p1>
        <br />
        <br />
        <div className="mainasl">
          <Link to="">
          <h1>
            <ImPlay3 />
          </h1></Link>
        </div>
        <br />
        <div className="rangasl">
          <input type="range" />
        </div>
        <br />
        <br />
        <Link to="/ten">
        <button
          style={{
            color: "white",
            backgroundColor: "black",
            borderRadius: "9px",
            width: "320px",
            height: "53px",
            marginLeft: "15px",
          }}
        >
          Generate Text
        </button></Link>  
      </center>
    </>
  );
};
export default Nine;
