import Learn from './components/learnPath'
function PageMaker({mapAry}) {
    let learn = mapAry.topic.map((item, id)=>{
        console.log(item)
        return <Learn key={id} Topic={item.topicHead} resources={item.resources} TopicSub={item.topicSub} />
    })
    return(
        <div className="page">
        <div className="tittle">
            <div>
                <span>{mapAry.name}</span>
                <img src={mapAry.src}></img>
            </div>
            <p>{mapAry.details}</p>
        </div>
        <div className="topics">
            {learn}
        </div>
        </div>
    )
}

export default PageMaker