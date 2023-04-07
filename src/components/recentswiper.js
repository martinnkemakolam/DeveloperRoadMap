import { useRef } from 'react'
import {MdDelete} from 'react-icons/md'
import Card from './card'
import Rest from './rest'
function RecentSwiper({userData, deleteFunc, selectTrack, rearrangeFunc}) {
  let reference = useRef()
    let card = userData.map((item, id)=>{
        return(
            <Card key={id} isSmall={true} nameOfMap={item.name} imgSrc={item.src} selectTrack={selectTrack} rearrangeFunc={rearrangeFunc} id={id} ref={reference.current}/>
        )
    })
    return(
    <div className="recentSwiper">
    <p>
    Following a road map is an effective way to achieve your goals and reach your desired destination. A road map provides a clear path to follow, which helps you stay focused and motivated. Here are a few reasons why you should follow a road map:

Firstly, a road map helps you plan your journey. It allows you to identify the key steps you need to take to achieve your goal and helps you create a timeline for completion. With a road map, you can break down your goals into smaller, more manageable tasks, which makes them easier to accomplish.

Secondly, a road map helps you stay organized. It provides a visual representation of your journey and allows you to track your progress along the way. With a road map, you can see how far you've come and how much further you need to go.

Lastly, following a road map can help you stay motivated. As you reach each milestone along your journey, you'll feel a sense of accomplishment, which can be incredibly motivating. This can help you stay focused on your goals and push through any obstacles that may arise.

Overall, following a road map is an excellent way to achieve your goals, stay organized, and stay motivated along the way.
    </p>
    <div className="swiperH">
        {
        userData.length > 0?
        <>
        <span>Your Track</span>
        <div className='swiper' ref={reference}>
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