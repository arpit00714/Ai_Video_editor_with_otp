import { Link } from "react-router-dom";
import "./Ten.css";
import { FaChevronLeft } from "react-icons/fa";
const Ten = () => {
  return (
    <>
      <div className="startytg">
        <Link to="/nine">

        <h2>
          <FaChevronLeft />
        </h2></Link>  
        <h1> Create Video</h1>
        <img src="images/men6.jpg" />
      </div>

      <br />
      <div className="textytg">
        <p>Preview Text</p>
      </div>

      <div className="inpuytg">
        <textarea
          type="text"
          placeholder=" Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ."
        />
      </div>

      <div className="geneytg">
        <Link to="/eleven" style={{textDecoration:"none"}}>
        <button>Generate Video</button></Link>
      </div>
    </>
  );
};
export default Ten;
