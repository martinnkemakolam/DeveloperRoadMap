import { useRef, useState, useEffect} from "react"
import { observerCreater } from "../helperFunc"
function Card({ nameOfMap, imgSrc, id, selectTrack, details, rearrangeFunc, ref}) {
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
      }
      return(()=>{
        observer.disconnect()
    })
  }, [])
    let start;
    let hoverStop;
    return(
        <>
        <div className={ observerBool ? "card" : "card active"} draggable={true} onDragStart={()=>{start = id; console.log(start)} } onDragOver={()=>{hoverStop = id; console.log(hoverStop)}} onDragEnd={()=>{rearrangeFunc(start, hoverStop); console.log('dropped')}} ref={eleObs}>
        <img src={imgSrc}></img>
        <div className='holder'>
          <p>{nameOfMap}</p>
          <button onClick={()=> selectTrack(nameOfMap)}>See map</button>
        </div>
      </div>
      </>
    )
}

export default Card