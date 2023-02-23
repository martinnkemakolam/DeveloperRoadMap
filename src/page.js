import Form from "./components/form"
import { useRef, useState } from "react"
import { MdClose} from "react-icons/md"
import Learn from './components/learnPath'
import Copy from "./components/copy"
import Bar from "./components/bar"
function PageMaker({mapAry, removePage}) {
    let reference = useRef()
    let reference2 = useRef()
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
        return <Learn key={id} Topic={item.topicHead} resources={item.resources} TopicSub={item.topicSub} openFunc={openForm} clipFunc={()=> clipboard(item.resources)} root={reference.current}/>
    })
    let bar = mapAry.topic.map((item, id)=>{
        return (
            <Bar topicHead={item.topicHead} ref={reference2.current} key={id}/>
        )
    })
    let close =()=>{
        setIsOpen(false)
    }
    let openFormWithoutCourse =()=>{
        setIsOpen(true)
        setTopic('')
    }
    
    return(
        <div className="page" ref={reference}>
            <div className="pageTop">
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.</span>
                <MdClose className="close" onClick={()=> removePage()}/>
            </div>
            <Form isOpen={isOpen} Course={topic} closeFunc={close}/>
        <div className="topics">
            <div className="leftTopic">
            {learn}
            </div>
            <div className="rightTopic">
                <div className="circularBar">
                    <div className="innerBar">
                        <span>0%</span>
                    </div>
                </div>
                <div className="barHolder" ref={reference2}>
                    {bar}
                </div>
                <div className="attendanceHolder">
                    <div className="attendDetailTop">
                        <button>Back</button>
                        <span>8th Feb 2022</span>
                        <button>Next</button>
                    </div>
                    <div className="attendanceDetail">
                        <li>Read a topic under course</li>
                    </div>
                </div>
            </div>
        </div>
        <Copy className={name}/>
        </div>
    )
}

export default PageMaker 