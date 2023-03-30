import { useRef, useState, useEffect, forwardRef} from "react"
import { observerCreater } from "../helperFunc"
let Card =  forwardRef(
  function Card(prop, ref) {
    let {nameOfMap, imgSrc, id, selectTrack, details, rearrangeFunc} = prop
    let eleObs = useRef()
      let [observerBool, setObserverBool] = useState(true)
      useEffect(()=>{
        let observer = observerCreater((item)=>{
            item.forEach(element => {
                if(element.isIntersecting){
                    setObserverBool(true)
                }else{
                    setObserverBool(false)
                }
            });
        }, ref, 0.4)
        if (eleObs) {
            observer.observe(eleObs.current)
            return(()=>{
              observer.disconnect()
            })
        }
    }, [])
      let start;
      let hoverStop;
      return(
          <>
          <div className={ observerBool ? "card" : "card active"} draggable={true} onDragStart={()=>start = id} onDragOver={()=>hoverStop = id} onDragEnd={()=>rearrangeFunc(start, hoverStop)} ref={eleObs}>
          <img src={imgSrc}></img>
          <div className='holder'>
            <p>{nameOfMap}</p>
            <button onClick={()=> selectTrack(nameOfMap)}>See map</button>
          </div>
        </div>
        </>
      )
  }
) 

export default Card