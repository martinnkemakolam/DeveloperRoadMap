import { useState, useRef} from "react"
import TopicInput from "./topicInput"
// make user only able to type on next after previous is done 
function DataHolder({id, course, descripton, topic, input, focus, popUp}){
let [inputCourse, setInputCourse] = useState(course)
let [height, setHeight] = useState(30)
let currentInput= useRef()
let descriptionInput= useRef()
let [inputDescription, setInputDescription] = useState()
let [inputTopic, setInputTopic] = useState(topic)
let topicInput= useRef(inputTopic)
let courseFunc=(e)=>{
    setInputCourse(e.target.value)
    input(id, {
        course: currentInput.current.value,
        description: inputDescription,
        topic: inputTopic
    })
}
let descriptionFunc=(e)=>{
    let len = Math.round(descriptionInput.current.clientWidth / 10)
    console.log(len)
    // peter comment; wont touch code
    // who knows maybe might improve 
    if(descriptionInput.current.value.length !== 0){
        if(descriptionInput.current.value.length < len ){
            return
        }else{
            setHeight(descriptionInput.current.value.length/len * 30)
        }
    }
    setInputDescription(e.target.value)
    input(id, {
        course: inputCourse,
        description: descriptionInput.current.value,
        topic: inputTopic
    })
}
let topicFunc=(id2, obj)=>{
    topicInput.current = topicInput.current.map((item, index)=>{
        if (id2 === index) {
            return obj
        }else return item
    })
    if (id2 <= inputTopic.length - 1){
        setInputTopic((pre)=>{
            return pre.map((item, index)=>{
                if (id2 === index) {
                    return obj
                }else return item
            })
        })
        if (id2 === inputTopic.length - 1) {
            if (/^[\w.]+$/i.test(inputTopic[inputTopic.length - 2])) {
                topicInput.current = topicInput.current.concat('')
                setInputTopic((pre)=> pre.concat(''))
            }else{
                popUp()
            }
        }
    }
    input(id, {
        course: inputCourse,
        description: inputDescription,
        topic: topicInput.current
    })
}
let filterTopic=(id)=>{
    if (id === topic.length - 1) {
        return
    }else{
        if(/^[\w.]+$/i.test(topic[topic.length - 1])){
            let update = inputTopic.filter((item)=> /^[\w.]+$/i.test(item))
         setInputTopic([...update, ''])
        }
    }
}
let topicEle = inputTopic.map((item, id)=>{
    return <TopicInput key={id} item={item} id={id} topicFunc={topicFunc} filter={filterTopic}/>
})
return(
    <div className="dataHolder" onFocus={()=> focus(id)}>
             <div>
                 <label>What course do you want to add to the roadmap</label>
                 <input placeholder="Course" ref={currentInput} className="input" value={course} onInput={(e)=> courseFunc(e)}></input>
             </div>
             <div>
                 <label>Can you describe this course to us and how it adds value to this roadmap</label>
                 <textarea style={{height: `${height}px`}} className="input" ref={descriptionInput} placeholder="Descripton" onInput={(e)=>descriptionFunc(e)}></textarea>
             </div>
             <div className="element">
                 <label>What topics do you want to add to this roadmap</label>
                 <ul>
                     {topicEle}
                 </ul>
             </div>
         </div>
    )
}
export default DataHolder