import { useState } from "react"
import { MdClose} from "react-icons/md"

function Form({ isOpen, Course, closeFunc}) {
    let [course, setCourse] = useState('')
    let [topic, setTopic] = useState('')
    let className = isOpen ? ['formHold', 'active'] : ['formHold']
    let inputClass = Course.length === 0 ? [''] : ['active']
    return(
        <div className={className.join(' ')}>
        <form className='formEle'>
            <MdClose className="close" onClick={()=> closeFunc()}/>
            <div>
                <label>Add a course you feel we missed</label>
                <input className={inputClass} value={Course || course} onChange={(e)=> setCourse(e.target.value)}></input>
            </div>
            <div>
                <label>Add a Topic you feel we missed</label>
                <input value={topic} onChange={(e)=> setTopic(e.target.value)}></input>
            </div>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default Form