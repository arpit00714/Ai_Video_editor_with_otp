import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { CiMail, CiLock } from "react-icons/ci";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="containernx">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="imgnx">
            <img src="image/forum1.png" alt="forum1" />
          </div>

          <div className="welcomenx">
            <p>Welcome to</p>
            <h1>AiVideo Recorder</h1>
          </div>

          <div className="fieldnx">
            <CiMail className="iconnx" />
            <label htmlFor="email">
              {" "}
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or Mobile"
              />
            </label>
          </div>
          <div className="fieldnx">
            <CiLock className="iconnx" />
            <label htmlFor="password">
              {" "}
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </label>
          </div>

          <div className="signnx">
            <button type="submit">Sign Up</button>
          </div>
          <div className="signnx">
            <p>
              Already have an account? <Link to="/first">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
