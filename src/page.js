import { useRef, useState } from "react"
import { MdClose} from "react-icons/md"
import Learn from './components/learnPath'
import Copy from "./components/copy"
import Bar from "./components/bar"
import Test from "./components/test"
function PageMaker({ detailFunc,updateTest, filterName, mapArys, removePage, toggleReadFunc}) {
    let mapAry = mapArys.filter((item)=> item.name === filterName)
    let reference = useRef()
    let [testIsOpen, setTestIsOpen] = useState(true)
    let reference2 = useRef()
    let [currentDate, setCurrentDate] = useState(mapAry[0].data.length - 1)
    let [name, setName]= useState('clipboard')
    let detailChangeNext = (id)=>{
        if (id === mapAry[0].data.length - 1) {
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
    let testTaker=(arg, name)=>{
        let dateee = new Date()
        let date = `${dateee.getFullYear()}/${dateee.getMonth() + 1}/${dateee.getDate()}`
        testData.current = arg
        detailFunc(name, {date: date, detail: [`Took a test on the course ${arg}`]})
        setTestIsOpen(false)
    }
    let removeTest=(arg)=>{
        let dateee = new Date()
        let date = `${dateee.getFullYear()}/${dateee.getMonth() + 1}/${dateee.getDate()}`
        updateTest(filterName, testData.current, arg)
        detailFunc(filterName, {date: date, detail: [`Finished test on course ${testData.current} score: ${arg}`]})
        setTestIsOpen(true)
    }
    let clipboard = (arg, topic, course)=>{
        let dateee = new Date()
        let date = `${dateee.getFullYear()}/${dateee.getMonth() + 1}/${dateee.getDate()}`
        detailFunc(filterName, {date: date, detail: [`copied resource for topic ${topic}(${course})`]})
        navigator.clipboard.writeText(arg)
        setName("clipboard active")
        setTimeout(()=>{
            setName("clipboard")
        }, 1000)
    }
    let read=(name, topicId, id, readBol,topic, course)=>{
        let dateee = new Date()
        let date = `${dateee.getFullYear()}/${dateee.getMonth() + 1}/${dateee.getDate()}`
        toggleReadFunc(name, topicId, id, {date: date, detail: [`${ readBol ?  'unread the topic' : 'Read the topic'} ${topic}(${course})`]})
    }
    let learn = mapAry[0].topic.map((item, id)=>{
        let hide = true
        if (id === 0) {
            hide = false
        }
        if (id > 0){
            if(mapAry[0].topic[id - 1].testScore > 3 ){
                hide = false
            }
        }
        return <Learn detailFunc={detailFunc} name={filterName} topicId={id} key={id} Topic={item.topicHead} hide={hide} toggleReadFunc={read} resources={item.resources} TopicSub={item.topicSub}  clipFunc={clipboard} takeTest={testTaker} root={reference.current}/>
    })
    let bar = mapAry[0].topic.map((item, id)=>{
        return (
            <Bar topicHead={item.topicHead} reef={reference2.current} score={item.testScore} key={id}/>
        )
    })
    let data = 0
    let fullList = 0
    mapAry[0].topic.forEach(element => {
        element.topicSub.forEach((item)=>{
            fullList = fullList + 1
            if (item.read === true) {
                data = data + 1
            }
        })
    });
    let detail = mapAry[0].data.map((item, id)=>{
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
    let deg = (data / fullList * 100)/100 * 360
    return(
            testIsOpen ? 
            <div className="page" ref={reference}>
            <div className="pageTop">
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.</span>
                <MdClose className="close" onClick={()=> removePage()}/>
            </div>
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
                    {detailInView}
                </div>
            </div>
        </div>
        <Copy className={name}/>
        </div> :
        <Test Topics={mapAry[0].topic} data={testData.current} backFunc={removeTest}/>
    )
}
export default PageMaker