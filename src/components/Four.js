import { Link } from "react-router-dom";
import"./Four.css";

const Four = () => {
  return (
    <>
      <div className="nav16">
        <p>Say...</p>
        <Link to="/Third">
        <button className="close-btn1">X</button>
        </Link>
      </div>

      <div className="maind">
        <div className="texta">
          <p>
            Lorem ipsum, dolor sit amet consectetur.Itaque vero aliquid dolore!
            Quas, minimajkbhkibh;ik; gyulgyupg hui; bghyulgyugug;p Ratione enim
            similiquejhjuihi imped eveniet provident eaque ut,
            voluptateskml'jmkliji'ohnju'kn optio repudiandae eum, voluptate
            alias harum obcaecati ducimus necessitatibus quae facere ab
            quibusdam.
          </p>
        </div>
      </div>

      <div className="rangu">
        <input type="range" />
      </div>
      
      <div className="contn">
      <Link to="/Five" className="link_2">
        Continue
        </Link>
      </div>
     

      <div className="picu">
        <img src="image/sam.avif" />
      </div>
    </>
  );
};
export default Four;