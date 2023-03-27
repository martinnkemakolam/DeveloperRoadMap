import { useContext } from 'react'
import { useRef, useState, useEffect} from "react"
import { observerCreater } from "../helperFunc"
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { contextForCard } from '../App'
function CardLarge({nameOfMap, id, selectTrack, setIsActive,details, ref, setOuterId}) {
  let eleObsBig = useRef()
    let addToUserData = useContext(contextForCard)
    let [observerBoolBig, setObserverBoolBig] = useState(true)
    useEffect(()=>{
      let observer2 = observerCreater((item)=>{
        item.forEach(element => {
            if(element.isIntersecting){
                setObserverBoolBig(true)
            }else{
                setObserverBoolBig(false)
            }
        });
    }, ref, 0.1)
      if(eleObsBig){
        observer2.observe(eleObsBig.current)
      }
    return(()=>{
        observer2.disconnect()
    })
  }, [])
    return(
      <>
      <div className= { observerBoolBig ? "card large" : "card large active"} ref={eleObsBig}>
        <div className='cardTitle'><span>{nameOfMap}</span> <AiOutlinePlusCircle className='icon' onClick={()=>addToUserData(id)}/></div>
        <p>{details}</p>
        <div className='btn-Hold'>
          <button onClick={()=>{
            setIsActive(true)
            setOuterId()
          }}>Read more</button>
          <button onClick={()=> selectTrack(nameOfMap)}>See map</button>
        </div>
      </div>
      </>
    )
}

export default CardLarge