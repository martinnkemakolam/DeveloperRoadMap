import { useState } from "react"

function Learn({Topic, resources, TopicSub, openFunc}) {
    let[currentTopic, setCurrentTopic] = useState(0)
    let full = TopicSub.length
    let topic = TopicSub.map((item, id)=>{
        let chapter = id + 1
        return(
            <>
            <div className='head'>
                <span className='chapter'>Chapter {chapter}</span>
                <div className='level'>
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
    
    return(
        <>
        <div className="toLearn">
            <div className='left'>
                <span className='top'>Course</span>
                <span className="topicHead">{Topic}</span>
                <button onClick={()=> openFunc(Topic)}>Contribute</button>
            </div>
            <div className='right'>
                {topicInView}
                <div className='btnHolder'>
                    <button onClick={()=> backward()}>Back</button>
                    <button onClick={()=> console.log('copied')}>Copy Resourse</button>
                    <button onClick={()=> foward()}>Continue</button>
                </div>
            </div>  
        </div>
        </>
    )
}

export default Learn