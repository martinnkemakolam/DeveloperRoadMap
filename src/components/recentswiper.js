import {MdDelete} from 'react-icons/md'
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
    <p>
      Hello user, if your here it is probably because just like me before, you are confused about what to learn depending on your respective path. Well I just want to tell you that this is not a problem any more. On this site we have gone around and asked different developers important topics, languages, framework needed to be known in order to call yourself a modern day developer. Also if you feel their is a topic, language, or framework that should be added notify us and we will do just that 
    </p>
    <div className="swiperH">
        {
        userData.length > 0?
        <>
        <span>Your Track</span>
        <div className='swiper'>
        {card}
        <MdDelete className='button' onClick={deleteFunc}/>
        </div>
        </>
        : <Rest type={'swipper'}/>}
    </div>
  </div>
    )
}

export default RecentSwiper