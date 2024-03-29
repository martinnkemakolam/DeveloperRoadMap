import { useRef, useState } from "react"
import { MdClose} from "react-icons/md"
import Learn from './components/learnPath'
import Copy from "./components/copy"
import Bar from "./components/bar"
import Test from "./components/test"
import Rest from "./components/rest"
import {useNavigate } from "react-router-dom"
function PageMaker({ detailFunc,updateTest, mapAry, removePage, toggleReadFunc, finishTest}) {
    let reference = useRef()
    let navigate = useNavigate()

    let resourceRef = useRef()
    let filterName = mapAry.name
    let noRenderPage = mapAry.topic === undefined ? true : false
    let [testIsOpen, setTestIsOpen] = useState(true)
    let reference2 = useRef()
    let [currentDate, setCurrentDate] = useState(0)
    let [name, setName]= useState('clipboard')
    let testData = useRef('empty');
    let data = 0
    let fullList = 0
    let linkUp =()=>{
        navigate('/contribute', {
            state:{
                img: mapAry.src
            }
        })
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
    let testTaker=(arg, name)=>{
        let dateee = new Date()
        let date = `${dateee.getFullYear()}/${dateee.getMonth() + 1}/${dateee.getDate()}`
        testData.current = arg
        detailFunc(name, {date: date, detail: [`Took a test on the course ${arg}`]})
        setCurrentDate(mapAry.data.length - 1)
        setTestIsOpen(false)
    }
    let removeTest=(arg)=>{
        let dateee = new Date()
        let date = `${dateee.getFullYear()}/${dateee.getMonth() + 1}/${dateee.getDate()}`
        updateTest(filterName, testData.current, arg)
        detailFunc(filterName, {date: date, detail: [`Finished test on course ${testData.current} score: ${arg}`]})
        setCurrentDate(mapAry.data.length - 1)
        setTestIsOpen(true)
    }
    let openCopy=(resource, subtopic, topic)=>{
        resourceRef.current = {
            resource: resource,
            subtopic: subtopic,
            topic: topic
        }
        setName("clipboard active")
    }
    let closeCopy=()=>{
        setName("clipboard")
    }
    let clipboard = (arg, media,topic, course)=>{
        let dateee = new Date()
        let date = `${dateee.getFullYear()}/${dateee.getMonth() + 1}/${dateee.getDate()}`
        detailFunc(filterName, {date: date, detail: [`${media} resource copied for topic ${topic}(${course})`]})
        setCurrentDate(mapAry.data.length - 1)
        navigator.clipboard.writeText(arg)
    }
    let read=(name, topicId, id, readBol,topic, course)=>{
        let dateee = new Date()
        let date = `${dateee.getFullYear()}/${dateee.getMonth() + 1}/${dateee.getDate()}`
        toggleReadFunc(name, topicId, id, {date: date, detail: [`${ readBol ?  'unread the topic' : 'Read the topic'} ${topic}(${course})`]})
        setCurrentDate(mapAry.data.length - 1)
    }
    if (noRenderPage) {
        return (
            <Rest type={'course'} returnFunc={removePage}/>
        )
    }else{
        let learn = mapAry.topic.map((item, id)=>{
            let hide = true
            if (id === 0) {
                hide = false
            }
            if (id > 0){
                if(mapAry.topic[id - 1].testScore > 3 ){
                    hide = false
                }
            }
            return <Learn detailFunc={detailFunc} name={filterName} topicId={id} key={id} Topic={item.topicHead} hide={hide} toggleReadFunc={read} resources={item.resources} TopicSub={item.topicSub}  clipFunc={openCopy} takeTest={testTaker} finishTest={finishTest} root={reference.current}/>
        })
        let bar = mapAry.topic.map((item, id)=>{
            return (
                <Bar topicHead={item.topicHead} reef={reference2.current} score={item.testScore} key={id}/>
            )
        })
        mapAry.topic.forEach(element => {
            element.topicSub.forEach((item)=>{
                fullList = fullList + 1
                if (item.read === true) {
                    data = data + 1
                }
            })
        });
        let detail = mapAry.data.map((item, id)=>{
            if (currentDate === id) {
                let liList = item.detail.map((item, id)=>{
                    return <li key={id}>{item}</li>
                })
                return(
                    <div className="full" key={id}>
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
            }
        })
        let deg = (data / fullList * 100)/100 * 360
        return(
                testIsOpen ? 
                <div className="page" ref={reference}>
                <MdClose className="close" onClick={()=> removePage()}/>
            <div className="topics">
                <div className="leftTopic">
                {learn}
                </div>
                <div className="rightTopic">
                    <div className="circularBar" style={{background: `conic-gradient(rgb(10, 10, 10) ${deg}deg, white 1deg)`}}>
                        <div className="innerBar">
                            <span>{Math.round(data / fullList * 100)}%</span>
                        </div>
                    </div>
                    <div className="barHolder" ref={reference2}>
                        {bar}
                    </div>
                    <div className="attendanceHolder">
                        {detail}
                    </div>
                    <button className="formBtn" onClick={()=>linkUp('img')}>Contribute</button>
                </div>
            </div>
            <Copy className={name} clipFunc={clipboard} closeFunc={closeCopy} resource={resourceRef.current}/>
            </div> :
            <Test name={mapAry.name} Topics={mapAry.topic} data={testData.current} backFunc={removeTest} finishTest={finishTest}/>
        )
    }   
}
export default PageMaker