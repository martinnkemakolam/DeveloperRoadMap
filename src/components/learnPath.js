import { useRef, useState, useEffect} from "react"
import { observerCreater } from "../helperFunc"
function Learn({Topic, resources, takeTest,TopicSub, openFunc, clipFunc, root, hide}) {
    let eleObs = useRef()
    useEffect(()=>{
        let observer = observerCreater((item)=>{
            item.forEach(element => {
                if(element.isIntersecting){
                    setObserverBool(true)
                }else{
                    setObserverBool(false)
                }
            });
        }, root, 0.4)
        if (eleObs) {
            observer.observe(eleObs.current)
        }
    }, [])
    let [observerBool, setObserverBool] = useState(true)
    let[currentTopic, setCurrentTopic] = useState(0)
    let[className, setClassName] = useState(true)
    let readAll = true
    let full = TopicSub.length
    let topic = TopicSub.map((item, id)=>{
        let chapter = id + 1
        let percent = (chapter/full * 100)
        return(
            <>
            <div className='head'>
                <span className='chapter'>Chapter {chapter}</span>
                <div className='level'>
                    <div className='done' style={{"width": `${percent}%`}}></div>
                    <span className='read'>{chapter}/{full} read</span>
                </div>
            </div>
            <span style={{position: 'relative'}} className={ hide ? 'hide': ''}>{item.subtopic}</span>
            </>
        )
    })
    let detail = TopicSub.map((item, id)=>{
        if (item.read === false) {
            readAll = false
        }
        return (
            <>
                <p style={{position: 'relative'}} className={ hide ? 'hide': ''} key={id}>{item.extraDetail}</p>
                <div>
                <button onClick={()=> console.log('toggle Read')}>{ item.read ? "Unread" : "Read"}</button>
                {TopicSub.length - 1 === id &&  <button onClick={()=> takeTest(Topic)} className={!readAll && 'clickable'}>take Test</button>}
                </div>
            </>
        )
    })
    let topicInView = topic[currentTopic]
    let detailInView = detail[currentTopic]
    let foward=()=>{
        let chap = currentTopic + 1
        if ( chap < full) {
            setCurrentTopic(chap)   
        }
    }
    let backward=()=>{
        let chap = currentTopic - 1
        if ( chap >= 0) {
            setCurrentTopic(chap)   
        }
    }
    let arg = className ? "detail hide" : "detail" 
    return(
        <>
        <div className={ observerBool ? "toLearn" : "toLearn active"} ref={eleObs}>
            <div className="topHead">
            <div className='left'>
                <div className='top'>
                    <span>Course</span>
                    <span onClick={()=> setClassName(!className)}>{ className ? "More" : "less"}</span>
                </div>
                <span className="topicHead">{Topic}</span>
                <button onClick={()=> openFunc(Topic)}>Contribute</button>
            </div>
            <div className='right'>
                {topicInView}
                <div className={ hide ? 'btnHolder hide': 'btnHolder'}>
                    <button onClick={()=> backward()}>Back</button>
                    <button onClick={()=> clipFunc()}>Copy Resourse</button>
                    <button onClick={()=> foward()}>Continue</button>
                </div>
            </div>
            </div>
            <div className={arg}>
                {detailInView}
            </div>
        </div>
        </>
    )
}

export default Learn