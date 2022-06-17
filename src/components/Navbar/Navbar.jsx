import React from 'react'
import "./Navbar.css"
import {useState} from "react"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Navbar = () => {
 const [isScrolled, setisScrolled] = useState(false) 

 window.onscroll=()=>{
   setisScrolled(window.pageYOffset=== 0 ? false : true)
   return ()=> (window.onscroll=== null);
 }

 console.log(isScrolled);
  return (
    <div className={isScrolled ? "newScrollbar" : "navbar"}>
        <div className="left-side">
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and popular</span>
            <span>My list</span>
        </div>

        <div className="right-side">
            <SearchIcon className="icons"/>
            <span>Kid</span>
            <NotificationsIcon className="icons"/>
            <img src="https://avatars.githubusercontent.com/u/87217051?v=4" alt="" />
           <div className="drop-down">
           <ArrowDropDownIcon className="icons"/>
          <div className="options">
          <span>Setting </span>
            <span >Logout</span>
          </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar
