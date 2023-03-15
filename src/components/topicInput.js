import { useEffect, useState } from "react"

function TopicInput({id, item, topicFunc, filter}) {
    let [value, setValue] = useState(item)
    let Func =(e, id)=>{
        setValue(e.target.value)
        topicFunc(id, e.target.value)
    }
    useEffect(()=>{
        setValue(item)
    }, [item])
    return(
        <li>
            <input onFocus={()=>filter(id)} value={value} onInput={(e)=> Func(e, id)} className="input" placeholder="topic"></input>
        </li>
    )
}

export default TopicInput