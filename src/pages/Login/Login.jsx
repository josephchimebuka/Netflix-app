import React from 'react'
import "./login.css"


export const Login = () => {
  
  return (

    <div className='Register'>
        <div className="top">
          <div className="wrapper">

         
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" className='image'/>
            <button className="loginbtn">Sign In</button>
            </div>
        </div>
    

      <div className="container">
        <form>
        <h1>Sign In</h1>
        <input type="email" placeholder='enter your email'/>
        <input type="password" placeholder='enter your password'/>
        <button>Submit</button>
        <span>New to netflix  <b>Sign up now</b> </span>
        <small>This page is protected by google reCAPTCHA to ensure you are not a bot <b>Learn more</b></small>
        </form>
      </div>
    
    </div>
  )
}
