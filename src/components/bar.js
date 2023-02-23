
import { useRef, useState, useEffect} from "react"
import { observerCreater } from "../helperFunc"
function Bar({topicHead, ref}) {
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
      }, ref, 0.9)
      if (eleObs) {
          observer.observe(eleObs.current)
      }
      return(()=>{
        observer.disconnect()
    })
  }, [])
    return(
        <div className={ observerBool ? "holder" : "holder active"} ref={eleObs}>
            <div className="bar"></div>
            <p>{topicHead}</p>
        </div>
    )
}

export default Bar