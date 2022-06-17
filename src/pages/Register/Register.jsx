import React from 'react'
import './register.css'
import { useRef,useState } from 'react'

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () =>{
    setEmail(emailRef.current.value);
  };
  const handleFinish =()=>{
    setPassword(passwordRef.current.value);
  };

  return (

    <div className='Register'>
        <div className="top">
          <div className="wrapper">

         
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" className='image'/>
            <button className="loginbtn">Sign In</button>
            </div>
        </div>
    

      <div className="container">
        <h1>Unlimited movies, Tv shows and more</h1>
        <h2>Watch anywhere cancel anytime</h2>
        <p>Ready to watch? Enter your email to create or restart your membership</p>
        {
          !email ? (
            <div className="input" ref={emailRef}>
        <input type="email" placeholder='Enter your email'/>
        <button className="submit" onClick={handleStart}>Get started</button>
      </div>
          ) : (<form className="input" ref={passwordRef}>
          <input type="password" placeholder='Enter your passsword'/>
          <button className="submit" onClick={handleFinish}>Start</button>
        </form >)
        }
      </div>
    
    </div>
  )
}
