import Rest from "./rest"
import {IoIosNotifications} from 'react-icons/io'
import { MdCancel } from "react-icons/md"
function MessageContainer({apiMsg, isOpen, closeFunc, readFunc, readAllFunc}) {
    let msg = apiMsg.map((item, id)=>{
        let read = !item.read ? ['msg'] : ['msg', 'active']
        return(
            <div className={read.join(' ')} onClick={()=> readFunc(id)} key={id}>
            <IoIosNotifications className="icon"/>
            <div className="right">
                <p>{item.msg}</p>
                <span>{item.date}</span>
            </div>
        </div>
        )
    })
    let className = isOpen ? ['msgContainer'] : ['msgContainer', 'active'] 
    return(
    <div className={className.join(' ')}>
        <div className="msgCtn">
            <div className="head">
            <MdCancel className="cancel" onClick={()=> closeFunc()}/>
                <span>Notification</span>
                <button onClick={()=> readAllFunc()}>Mark as read</button>
            </div>
            <div className="msgHold">
                {msg}
            </div>
        </div>
    </div>
    )
}

export default MessageContainer