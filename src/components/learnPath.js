import { useState } from "react"

function Learn({Topic, resources, TopicSub, openFunc, clipFunc}) {
    let[currentTopic, setCurrentTopic] = useState(0)
    let[className, setClassName] = useState(true)
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
            <span>{item}</span>
            </>
        )
    })
    let topicInView = topic[currentTopic]
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
        <div className="toLearn">
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
                <div className='btnHolder'>
                    <button onClick={()=> backward()}>Back</button>
                    <button onClick={()=> clipFunc()}>Copy Resourse</button>
                    <button onClick={()=> foward()}>Continue</button>
                </div>
            </div>
            <div className={arg}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.</p>
            </div>
        </div>
        </>
    )
}

export default Learn