import { useEffect, useState } from "react"
import {BsFillArrowLeftSquareFill} from "react-icons/bs"
import {BsFillArrowRightSquareFill} from "react-icons/bs"
function ReadMore({head, outerId, isActive, setIsActive, seeMapFunc}) {
    let [nextPre, setNextPre] = useState(outerId)
    let data = head.filter((item,id)=> id === nextPre)
    let clickLeft =()=>{
        if (nextPre === 0) {
            return
        }
        setNextPre(nextPre - 1)
    }
    let clickRight =()=>{
        if (nextPre ===  head.length - 1) {
            return
        }
        setNextPre(nextPre + 1)
    }
    let removeActive =()=>{
        setIsActive(false)
    }
    let seeMap=()=>{
        seeMapFunc(data[0].name)
    }
    useEffect(()=>{
        setNextPre(outerId)
    }, [outerId])
    return(
        <div className={isActive ? "readMore" : "readMore active"}>
            <div className="pictureReadMore">
                <BsFillArrowRightSquareFill className="rightIcon" onClick={()=> clickRight()}/>
                <BsFillArrowLeftSquareFill className="leftIcon" onClick={()=> clickLeft()}/>
                <div className="read">
                    <h1>
                        {data[0].name}
                    </h1>
                    <p>
                        {data[0].details}
                        {data[0].details}
                        {data[0].details}
                        {data[0].details}
                    </p>
                    <div className="btnHold">
                        <button className="right" onClick={()=> seeMap()}>See map</button>
                        <button className="left" onClick={()=> removeActive()}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadMore