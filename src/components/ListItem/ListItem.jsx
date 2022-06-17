import React from 'react'
import"./ListItem.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ReactPlayer from "react-player"

export const ListItem = ({index}) => {
  const [isHovered, setisHovered] = useState(false);
  return (
    <div className='ListItem'
    style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={()=> setisHovered(true)}
    onMouseLeave={()=> setisHovered(false)}
    >
      <img src="https://image.tmdb.org/t/p/w1280/QaNLpq3Wuu2yp5ESsXYcQCOpUk.jpg" alt="" />
      {
         isHovered && (
           <>
       <ReactPlayer playing={true} loop
        controls={true}
        className='video'
        muted={true}
         url='https://youtu.be/JfVOs4VSpmA'
         />
      <div className="movie-info">
      <div className="icons">
        <PlayArrowIcon className='icon'/>
        <AddIcon className='icon'/>
        <ThumbUpOutlinedIcon className='icon'/>
        <ThumbDownAltOutlinedIcon className='icon'/>
      </div>
      <div className="themeinfo">
        <span>1hr 40min</span>
        <span className='ageRating'>+16</span>
        <span>2022</span>
      </div>
      <div className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Nobis eius recusandae dolor architecto!
      </div>
      <div className="genre">
        Action
      </div>
      </div>
      </> )
      }
      
    </div>
  )
}
