import Form from "./components/form"
import { useRef, useState } from "react"
import { MdClose} from "react-icons/md"
import Learn from './components/learnPath'
import Copy from "./components/copy"
import Bar from "./components/bar"
import Test from "./components/test"
function PageMaker({mapAry, removePage}) {
    let reference = useRef()
    let [testIsOpen, setTestIsOpen] = useState(true)
    let reference2 = useRef()
    let [currentDate, setCurrentDate] = useState(mapAry.data.length - 1)
    let [isOpen, setIsOpen] = useState(false)
    let [topic, setTopic] = useState('')
    let [name, setName]= useState('clipboard')
    let openForm =(arg)=>{
        setIsOpen(true)
        setTopic(arg)
    } 
    let detailChangeNext = (id)=>{
        if (id === mapAry.data.length - 1) {
            return
        }
        setCurrentDate(id + 1)
    }
    let detailChangeBack=(id)=>{
        if (id === 0){
            return
        }
        setCurrentDate(id - 1)
    }
    let testData = useRef('empty');
    let testTaker=(arg)=>{
        testData.current = arg
        setTestIsOpen(false)
    }
    let removeTest=()=>{
        setTestIsOpen(true)
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
        let hide = false
        if (id > 0){
            if(mapAry.topic[id - 1].testScore < 3 ){
                hide = true
            }
        }
        return <Learn key={id} Topic={item.topicHead} hide={hide} resources={item.resources} TopicSub={item.topicSub} openFunc={openForm} clipFunc={()=> clipboard(item.resources)} takeTest={testTaker} root={reference.current}/>
    })
    let bar = mapAry.topic.map((item, id)=>{
        return (
            <Bar topicHead={item.topicHead} ref={reference2.current} score={item.testScore} key={id}/>
        )
    })
    let close =()=>{
        setIsOpen(false)
    }
    let data = 0
    let fullList = 0
    mapAry.topic.forEach(element => {
        element.topicSub.forEach((item)=>{
            fullList = fullList + 1
            if (item.read === true) {
                data = data + 1
            }
        })
    });
    let detail = mapAry.data.map((item, id)=>{
        let liList = item.detail.map((item, id)=>{
            return <li key={id}>{item}</li>
        })
        return(
            <div key={id}>
            <div className="attendDetailTop">
                <button onClick={()=> detailChangeBack(id)}>Back</button>
                <span>{item.date}</span>
                <button onClick={()=> detailChangeNext(id)}>Next</button>
            </div>
            <div className="attendanceDetail">
                {liList}
            </div>
            </div>
        )
    })
    let detailInView = detail[currentDate]
    let openFormWithoutCourse =()=>{
        setIsOpen(true)
        setTopic('')
    }
    let deg = (data / fullList * 100)/100 * 360
    return(
            testIsOpen ? 
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
                <div className="circularBar" style={{background: `conic-gradient(rgb(10, 10, 10) ${deg}deg, white 1deg)`}}>
                    <div className="innerBar">
                        <span>{data / fullList * 100}%</span>
                    </div>
                </div>
                <div className="barHolder" ref={reference2}>
                    {bar}
                </div>
                <div className="attendanceHolder">
                    {detailInView}
                </div>
            </div>
        </div>
        <Copy className={name}/>
        </div> :
        <Test Topics={mapAry.topic} data={testData.current} backFunc={removeTest}/>
    )
}

export default PageMaker 