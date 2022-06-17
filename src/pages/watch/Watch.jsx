import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactPlayer from "react-player"
import './watch.css'
export const Watch = () => {
  return (
      
    <div className='Watch'>
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>
        <ReactPlayer playing={true} loop
        controls={true}
        className='react-player'
         url='https://youtu.be/JfVOs4VSpmA' 
        
         
         />
    </div>
  )
}
