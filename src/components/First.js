import "./First.css";
import React from "react";
import { CiMail, CiLock } from "react-icons/ci";
 import { auth} from "./Firebase";
 import  { useState } from "react";
import { Link} from "react-router-dom";
import {signInWithEmailAndPassword} from 'firebase/auth';


const First = () => {
  // ----------------SIGN IN CODING------------
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit=async (e)=>{
    e.preventDefault()
    try{
    await signInWithEmailAndPassword(auth,email,password)
    // console.log("Login Successfully")
    alert("Login Successfully")

    }catch(err){
      console.error("Firebase Error:", err.message);
    }
    }
    

  


  return (
    <>
      <div className="containernx">
      <form className='signup-form' onSubmit={handleSubmit}>
        <div className="imgnx">
          <img src="image/forum1.png" alt="forum1" />
        </div>

        <div className="welcomenx">
          <p>Welcome to</p>
          <h1>AiVideo Recorder</h1>
        </div>
        
        <div className="fieldnx">
          <CiMail className="iconnx" /><label htmlFor="email" >  < input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email or Mobile" />
          </label>   

                 </div>

        <div className="fieldnx">
          <CiLock className="iconnx" />
          <label htmlFor="password" >  <input type="password"  onChange={(e) => setPassword(e.target.value)}   placeholder="Password" /></label>

        </div>

        <div className="signnx">
    
        <button type="submit">Sign In</button>

        </div>
        {/* </form> */}

       
        <div className="Reseteenx">
          <p>
            Forgot Login Details? <span> <Link to="/passwordreset">Reset</Link></span>
          </p>
        </div>

        <div className="creatertnx">
        <Link to="/signup">
          <button>Create an Account</button>
          </Link>
                 </div>
                 </form>

      </div>
    </>
  );
};
export default First;
