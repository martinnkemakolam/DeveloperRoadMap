import { useContext } from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { contextForCard } from '../App'
function Card({isSmall, nameOfMap, imgSrc, id, selectTrack, details, rearrangeFunc}) {
    let addToUserData = useContext(contextForCard)
    let start;
    let hoverStop;
    return(
        <>
        { isSmall ?
        <div className="card" draggable={true} onDragStart={()=>{start = id; console.log(start)} } onDragOver={()=>{hoverStop = id; console.log(hoverStop)}} onDragEnd={()=>{rearrangeFunc(start, hoverStop); console.log('dropped')}}>
        <img src={imgSrc}></img>
        <div className='holder'>
          <p>{nameOfMap}</p>
          <button onClick={()=> selectTrack(nameOfMap)}>See map</button>
        </div>
      </div>
      : 
      <div className="card large">
        <div className='cardTitle'><span>{nameOfMap}</span> <AiOutlinePlusCircle className='icon' onClick={()=>addToUserData(id)}/></div>
        <p>{details}</p>
        <button onClick={()=> selectTrack(nameOfMap)}>See map</button>
      </div>}
      </>
    )
}

export default Card