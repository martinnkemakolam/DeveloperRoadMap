import {AiOutlineVerticalLeft} from 'react-icons/ai'
import Card from './card'
import Rest from './rest'

function RecentSwiper({userData, deleteFunc, selectTrack, rearrangeFunc}) {
    let card = userData.map((item, id)=>{
        return(
            <Card key={id} isSmall={true} nameOfMap={item.name} imgSrc={item.src} selectTrack={selectTrack} rearrangeFunc={rearrangeFunc} id={id}/>
        )
    })
    return(
    <div className="recentSwiper">
    <span>
      Hello user, if your here it is probably because just like me before, you are confused about what to learn depending on your respective path. Well I just want to tell you that this is not a problem any more. On this site we have gone around and asked different developers important topics, languages, framework needed to be known in order to call yourself a modern day developer. Also if you feel their is a topic, language, or framework that should be added notify us and we will do just that 
    </span>
    <div className="swiper">
        {
        userData.length > 0? 
        <>
        {card}
        <AiOutlineVerticalLeft className='button' onClick={deleteFunc}/>
        </>
        : <Rest type={'swipper'}/>}
    </div>
  </div>
    )
}

export default RecentSwiper