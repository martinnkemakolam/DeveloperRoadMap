
import MessageContainer from './components/messageContainer';
import PageMaker from './page'
import RecentSwiper from './components/recentswiper'
import General from './components/general';
import { createContext, useState, useRef, useEffect } from 'react';
import { validator } from './helperFunc';
import {AiOutlineNotification} from 'react-icons/ai'
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Form from './components/form';
import { api } from './API';
import { msg } from './API';
import ReadMore from './components/readMore';
export let contextForCard = createContext()
function App() {
let [apiData, setApiData] = useState(JSON.parse(localStorage.getItem('Data')) || api)
let [isActive, setIsActive] = useState(false)
let [apiMsg, setApiMsg] = useState(JSON.parse(localStorage.getItem('msg')) || msg)
let [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || [])
let [classNameMsg, setClassNameMsg] = useState(false)
let [filter, setFilter] = useState('')
let [isPageOpen, setIsPageOpen] = useState(true)
let pageText = useRef()
let pageData = useRef()
let outerIdRef = useRef(0)
let openMsgFunc =()=>{
  setClassNameMsg(true)
}
let finishTest =( course, topic, score)=>{
  let newApiMsg;
  let dateee = new Date()
  let date = `${dateee.getFullYear()}/${dateee.getMonth() + 1}/${dateee.getDate()}`
  if (score) {
    newApiMsg = [...apiMsg,{
      msg: `You have finished the test on ${course} under the topic ${topic} you scored ${score}`,
      read: true,
      date: date
    }]
  }else{
    newApiMsg = [...apiMsg,{
      msg: `You have finished reading the topic ${topic} in ${course}`,
      read: true,
      date: date
    }]
  }
  setApiMsg(newApiMsg)
}
let toggleReadFunc = ( courseName,topicID, topicSubID, detail)=>{
  setApiData( previousApi => previousApi.map((item, id)=>{
    if (item.name === courseName ) {
      return {
        name: item.name,
        src: item.src,
        details: item.details,
        data: item.data,
        topic: item.topic.map((item, id2)=>{
          if (topicID === id2) {
            return {
              topicHead: item.topicHead,
              // resources: item.resources,
              test: item.test,
              testScore: item.testScore,
              topicSub: item.topicSub.map((item, id3)=>{
                if (topicSubID === id3) {
                  return {
                    subtopic: item.subtopic,
                    extraDetail: item.extraDetail,
                    read: !item.read,
                    resources: item.resources,
                  }
                }else{
                  return item
                }
              })
            }
          }else{
            return item
          }
        })
      }
    } else {
      return item
    }
  }))
    detailFunc(courseName , detail)
}
let scoreFunc = ( courseName, topicName, newScore)=>{
  setApiData(newApiData => newApiData.map((item, id)=>{
    if (item.name === courseName ) {
      return {
        name: item.name,
        src: item.src,
        details: item.details,
        data: item.data,
        topic: item.topic.map((item, id2)=>{
          if (topicName === item.topicHead) {
            return {
              topicHead: item.topicHead,
              resources: item.resources,
              test: item.test,
              testScore: newScore,
              topicSub: item.topicSub
            }
          }else{
            return item
          }
        })
      }
    } else {
      return item
    }
  }))
}
var detailFunc = ( courseName, detail)=>{
  setApiData(newApiData => newApiData.map((item, id)=>{
    if (item.name === courseName ) {
      return {
        name: item.name,
        src: item.src,
        details: item.details,
        data: item.data[item.data.length - 1].date  !== detail.date ? [...item.data, detail] : item.data.map(item2 =>{
          if (item2.date === detail.date){
            return{
              date: item2.date,
              detail: [...item2.detail, detail.detail[0]]
            }
          }else{
            return item2
          }
        }),
        topic: item.topic
      }
    } else {
      return item
    }
  }))
}
let userDataRearrange =(value, valueTo)=>{
  let element = userData[value]
  let array = userData.filter((item)=> item.name !== element.name)
  array.splice(valueTo + 1, 0, element)
  setUserData(array)
}
let addToUserDataFunc =(userId)=>{
  let addedData = apiData.filter((item, id)=> userId === id)
  if (validator(...addedData, userData)) {
    setUserData([...userData, ...addedData])
  }
}
let deleteLastswiperFunc =()=>{
  let lastIndex = userData.length - 1
  let Data  = userData.filter((item, id)=> lastIndex !== id)
  setUserData(Data)
  
}
let filterRoadmaps =(arg)=>{
  setFilter(arg)
}
let selectTrack=(arg)=>{
  pageText.current = arg
  setIsPageOpen(false)
}
let removePage=()=>{
  setIsPageOpen(true)
}
//all Message function starts here
let closeMsgFunc =()=>{
  setClassNameMsg(false)
}
let msgRead =(userId)=>{
  let newMsg = apiMsg.map((item, id)=>{
    if (id === userId) {
      return {
        msg: item.msg,
        read: false,
        date: item.date
      }
    }else return item 
  })

  setApiMsg(newMsg)
}
let data = apiData.filter((item)=> item.name === pageText.current)
let msgReadAll =(userId)=>{
  let newMsg = apiMsg.map((item)=>{
      return {
        msg: item.msg,
        read: false,
        date: item.date
      }
  })
  setApiMsg(newMsg)
}
let notifyIcon;
apiMsg.forEach((item)=>{
  if (item.read) {
    notifyIcon = true
  }
})
// msg func stop here
let getOuterId =(arg)=>{
  outerIdRef.current = arg
}
useEffect(()=>{
  let data = apiData.filter((item)=> item.name === pageText.current)
  pageData.current = data[0]
  localStorage.setItem('Data', JSON.stringify(apiData))
}, [apiData])
useEffect(()=>{
  localStorage.setItem('userData', JSON.stringify(userData))
}, [userData])
useEffect(()=>{
    localStorage.setItem('Data', JSON.stringify(api))
    localStorage.setItem('msg', JSON.stringify(msg))
}, [])
  return (
    <BrowserRouter>
    <MessageContainer apiMsg={apiMsg} isOpen={classNameMsg} closeFunc={closeMsgFunc} readFunc={msgRead} readAllFunc={msgReadAll}/>
    <ReadMore seeMapFunc={selectTrack} isActive={isActive} setIsActive={setIsActive} head={apiData} outerId={outerIdRef.current}/>
      <Routes>
        <Route path='/' element={
           isPageOpen ?
            <>
              <div className={ notifyIcon ?"rightSide noty" : "rightSide"}>
                <AiOutlineNotification className='headerIcon' onClick={()=> openMsgFunc()}/>
              </div>
              <RecentSwiper userData={userData} deleteFunc={deleteLastswiperFunc} selectTrack={selectTrack} rearrangeFunc={userDataRearrange}/>
              <contextForCard.Provider value={addToUserDataFunc}>
                <General setIsActive={setIsActive} setOuterId={getOuterId} apiData={apiData} filter={filter} selectTrack={selectTrack} msgRead={msgRead} msgReadAll={msgReadAll} closeMsgFunc={closeMsgFunc} apiMsg={apiMsg} classNameMsg={classNameMsg} filterRoadmapsFunc={filterRoadmaps}/>
              </contextForCard.Provider>
            </> :
            <>
            <PageMaker detailFunc={detailFunc} mapAry={data[0]}  updateTest={scoreFunc} toggleReadFunc={toggleReadFunc} removePage={removePage} finishTest={finishTest}/>
            </>
             }/>
        <Route path='/contribute' element={<Form/>}/>
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;
