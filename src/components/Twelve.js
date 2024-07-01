import { FaChevronLeft } from "react-icons/fa";
import "./Twelve.css";
import { Link } from "react-router-dom";
const Twelve = () => {
  return (
    <>
      <div className="kmstart">
        <Link to="/eleven" style={{textDecoration:"none", color:"grey"}}>
        <h2>
          <FaChevronLeft />
        </h2></Link>
        <h1> Create Video</h1>
        <img src="images/men6.jpg" />
      </div>

      <div className="kmtext">
        <p>Write Prompt</p>
      </div>

      <div className="kminpu">
        <textarea
          type="text"
          placeholder="Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industrie"
        />
      </div>

      <div className="kmgene">
        <Link to="" style={{textDecoration:"none"}}>
        <button>Regenerate Video</button></Link>
      </div>
      <div className="kmtext1">
        <p>Preview Text</p>
      </div>

      <div className="kminpu1">
        <textarea type="text"
          placeholder="uhi Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout"/>
      </div>
      <div className="kmgene1">
        <Link to="/thirteen" style={{textDecoration:"none"}}>
        <button>Generate Video</button></Link>
      </div>
    </>
  );
};
export default Twelve;
