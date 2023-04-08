import { MdClose} from "react-icons/md"

function Copy({className, clipFunc, closeFunc, resource}) {
    console.log(resource)
    return(
        <div className={className}>
            <MdClose className="copyRemoveBtn" onClick={()=>closeFunc()}/>
            <button onClick={()=>{clipFunc(resource.resource[0], 'Youtube',resource.subtopic, resource.topic); closeFunc()}}>Youtube</button>
            <button onClick={()=> {clipFunc(resource.resource[1], 'Book',resource.subtopic, resource.topic); closeFunc()}}>A Book </button>
            <button onClick={()=> {clipFunc(resource.resource[2], 'Website',resource.subtopic, resource.topic); closeFunc()}}>Website</button>            
        </div>
    )
}

export default Copy