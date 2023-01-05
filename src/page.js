import Form from "./components/form"
import { useState } from "react"
import { MdClose} from "react-icons/md"
import Learn from './components/learnPath'
function PageMaker({mapAry, removePage}) {
    let [isOpen, setIsOpen] = useState(false)
    let [topic, setTopic] = useState('')
    let openForm =(arg)=>{
        setIsOpen(true)
        setTopic(arg)
    } 
    let learn = mapAry.topic.map((item, id)=>{
        return <Learn key={id} Topic={item.topicHead} resources={item.resources} TopicSub={item.topicSub} openFunc={openForm}/>
    })
    let close =()=>{
        setIsOpen(false)
    }
    let openFormWithoutCourse =()=>{
        setIsOpen(true)
        setTopic('')
    }
    return(
        <div className="page">
            <div className="pageTop">
                <span>Is their a course you think we should have added?</span>
                <button onClick={()=> openFormWithoutCourse()}>Contribute</button>
                <MdClose className="close" onClick={()=> removePage()}/>
            </div>
            <Form isOpen={isOpen} Course={topic} closeFunc={close}/>
        <div className="topics">
            {learn}
        </div>
        </div>
    )
}

export default PageMaker