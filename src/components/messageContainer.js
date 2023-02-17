import Rest from "./rest"
import {IoIosNotifications} from 'react-icons/io'
import { MdCancel } from "react-icons/md"
function MessageContainer({apiMsg, isOpen, closeFunc}) {
    // let msg = apiMsg.map((item, id)=>{
    //     let read = item.isRead ? ['msg'] : ['msg', 'active']
    //     return(
    //         <div className={read} key={id}>
    //             <p>{item.msg}</p>
    //             <span>july 23, 2021 at 09:15 AM</span>
    //         </div>
    //     )
    // })
    let className = isOpen ? ['msgContainer'] : ['msgContainer', 'active'] 
    return(
    <div className={className.join(' ')}>
        <MdCancel className="cancel" onClick={()=> closeFunc()}/>
        <div className="head">
            <span>Notification</span>
            <button onClick={()=> console.log('read')}>Mark as read</button>
        </div>
         <div className='msg'>
            <IoIosNotifications className="icon"/>
            <div className="right">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolor alias aut, totam esse dolorum ea est sit? Iste quas exercitationem eos dignissimos praesentium. Repellat facere minima magni explicabo minus?</p>
                <span>july 23, 2021 at 09:15 AM</span>
            </div>
        </div>
        <div className='msg active'>
            <IoIosNotifications className="icon"/>
            <div className="right">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolor alias aut, totam esse dolorum ea est sit? Iste quas exercitationem eos dignissimos praesentium. Repellat facere minima magni explicabo minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolor alias aut, totam esse dolorum ea est sit? Iste quas exercitationem eos dignissimos praesentium. Repellat facere minima magni explicabo minus?</p>
                <span>july 23, 2021 at 09:15 AM</span>
            </div>
        </div>
    </div>
    )
}

export default MessageContainer