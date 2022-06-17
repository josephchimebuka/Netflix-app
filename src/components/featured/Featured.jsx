import React from 'react'
import "./Featured.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import logo from "../../image/PngItem_691751.png"

export const Featured = ({type}) => {
  return ( 
    <div className='featured'>{
        type && (<div className='category'>
        <span>{type=== "movie" ? "Movie" : "Series"}</span>
        <select name="genre" id="genre">
            <option>Genre</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Historical">Historical</option>
            <option value="Horror">Horror</option>
            <option value="Western">Western</option>
            <option value="Animation">Animation</option>
            <option value="Drama">Drama</option>
            <option value="Documentary">Documentary</option>
        </select>
        </div>)
    } <img 
    src="https://cosmicbook.news/sites/default/files/spider-man-homecoming-high-res.jpg" alt="" /> 
    <div className="info">
       <img src={logo}
        alt=""
        className='movieImag' />

        <div className="desc">
            <span className="moviedesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, nulla atque 
                tempore possimus autem exercitationem perferendis officiis culpa consectetur in, 
                suscipit magnam tempora esse itaque nihil neque iusto voluptate temporibus.
            </span>

            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon/>
                    <span>Play</span>
                </button>
                <button className="b-info">
                    <InfoOutlinedIcon/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}
