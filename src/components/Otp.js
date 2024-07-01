
import React, { useState } from 'react';
import axios from 'axios';

const Otp=()=>{
    
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://192.168.31.8:9003/api/send-otp', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to send OTP');
    }
  };
  return(
    <>
    <div>
      <h1>Send OTP</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
<br/>
<br/>

      <button onClick={handleSendOtp}>Send OTP</button>
      <p>{message}</p>
    </div>
    </>
  );
};
    
export default Otp;