
import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function PasswordReset() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // setMessage
         alert("Password reset email sent! Check your inbox.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(`Error: $ {errorMessage}`);
        console.error("Error during password reset:", errorCode, errorMessage);
      });
  };

  return (
    <div className="resetxn">
      <h2>Reset Password</h2>
      <form onSubmit={handlePasswordReset}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
          required 
        /><br/>
        <br/>
        <button type="submit">Send Reset Email</button>
      </form>
      {message && <p>{message}</p>}

    </div>
  );
}

export default PasswordReset;