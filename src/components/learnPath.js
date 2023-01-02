import {MdArrowDropDownCircle} from 'react-icons/md'
import {HiClipboard} from 'react-icons/hi'
function Learn({Topic, resources, TopicSub}) {
    console.log(resources, TopicSub)
    let ResourcesHolder = resources.map((item, id)=>{
        return <div key={id}><span>{item}</span> <HiClipboard className='resicon'/></div>
    })
    let subTopic = TopicSub.map((item, id)=> <li key={id}>{item}</li>)
    return(
        <ul className="toLearn">
                    <span className="topicHead">{Topic}</span>
                    <div className="resourcesHolder">
                        <div className="resourceTittle">
                            <span>Resources</span>
                            <MdArrowDropDownCircle/>
                        </div>
                        <div className="resourcesDropdown">
                            {ResourcesHolder}
                        </div>
                    </div>
                    {subTopic}
        </ul>
    )
}

export default Learn