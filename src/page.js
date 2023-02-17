import Form from "./components/form"
import { useState } from "react"
import { MdClose} from "react-icons/md"
import Learn from './components/learnPath'
import Copy from "./components/copy"
function PageMaker({mapAry, removePage}) {
    let [isOpen, setIsOpen] = useState(false)
    let [topic, setTopic] = useState('')
    let [name, setName]= useState('clipboard')
    let openForm =(arg)=>{
        setIsOpen(true)
        setTopic(arg)
    } 
    let clipboard = (arg)=>{
        console.log(arg)
        navigator.clipboard.writeText(arg)
        setName("clipboard active")
        setTimeout(()=>{
            setName("clipboard")
        }, 1000)
    }
    let learn = mapAry.topic.map((item, id)=>{
        return <Learn key={id} Topic={item.topicHead} resources={item.resources} TopicSub={item.topicSub} openFunc={openForm} clipFunc={()=> clipboard(item.resources)}/>
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
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.</span>
                <MdClose className="close" onClick={()=> removePage()}/>
            </div>
            <Form isOpen={isOpen} Course={topic} closeFunc={close}/>
        <div className="topics">
            <div className="left">
            {learn}
            </div>
            <div className="right"></div>
        </div>
        <Copy className={name}/>
        </div>
    )
}

export default PageMaker 