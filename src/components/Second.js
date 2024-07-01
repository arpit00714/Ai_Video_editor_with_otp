import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import"./Second.css";
const Second=()=>{
  return(
    <>
   <div className="ddrstart">
   
    <div class="ddrcontainer">
        <div class="ddrcontent">
            <img src="image/forum1.png" alt="Verification Image" class="ddrverification-image"/>
            <div className="ddrjk">
              <Link to="/First">
            <h2><FaChevronLeft /></h2>
            </Link>
            <h1>Verification</h1>
            </div>
            <div className="ddrram">
            <p>Please Enter the Verification Code <br/>Sent to Your Email/Mobile</p>
            </div>
            <div class="ddrcode-inputs">
                <input type="text" maxlength="1" class="ddrcode-input" inputMode="numeric"/>
                <input type="text" maxlength="1" class="ddrcode-input" inputMode="numeric"/>
                <input type="text" maxlength="1" class="ddrcode-input" inputMode="numeric"/>
                <input type="text" maxlength="1" class="ddrcode-input" inputMode="numeric"/>
            </div>
            {/* <Link to="/third"> */}
            <button class="ddrsubmit-button">Submit</button>
            {/* </Link> */}
        </div>
    </div>
</div>

    </>
  );
}
export default Second;