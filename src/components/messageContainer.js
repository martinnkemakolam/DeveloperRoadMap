import Rest from "./rest"

function MessageContainer({apiMsg, isOpen}) {
    let msg = apiMsg.map((item, id)=>{
        return(
            <div className="msg" key={id}>
                <span className="msgType">
                    {item.title}
                </span>
                <p>{item.msg}</p>
            </div> 
        )
    })
    let className = isOpen ? ['msgContainer', 'active'] : ['msgContainer']
    return(
    <div className={className.join(' ')}>
        { !apiMsg.length < 0 ? msg : <Rest type={'msg'}/>}
    </div>
    )
}

export default MessageContainer