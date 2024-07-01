import { FaChevronLeft } from "react-icons/fa";
import "./Eleven.css";
import { Link } from "react-router-dom";

const Eleven = () => {
  return (
    <>
      <div className="startqwal">
        <Link to="/ten">
        <h2>
          <FaChevronLeft />
        </h2></Link>
        <h1> Create Video</h1>
        <img src="images/men6.jpg" />
      </div>
      
      <br />
      <div className="textqwa">
        <p>Write Prompt</p>
      </div>

      <div className="inpuqwa">
        <textarea type="text" placeholder="Write Prompt Here" />
      </div>

      <div className="geneqwa">
        <Link to="/twelve" style={{textDecoration:"none"}}>
        <button>Generate Video</button></Link>
      </div>
    </>
  );
};
export default Eleven;
