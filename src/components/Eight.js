import { Link } from "react-router-dom";
import "./Eight.css";
import { FaChevronLeft } from "react-icons/fa";
const Eight = () => {
  return (
    <>
      <div className="parenthh">
        <Link to="/Seven" style={{textDecoration:"none", color:"grey"}}>
        <h2>
          <FaChevronLeft />
        </h2>
        </Link>
        <h1> Create Video</h1>
        <img src="image/men.jpg" />
      </div>

      <div className="texthh">
        <p>Write Text</p>
      </div>

      <div className="inpuhh">
        <textarea type="text" placeholder="Write Your Text Here" />
      </div>

      <div className="genehh">
        <Link to="/Eight2" style={{textDecoration:"none", color:"white"}}>
        <button >Generate Video</button>
        </Link>
      </div>
    </>
  );
};
export default Eight;
