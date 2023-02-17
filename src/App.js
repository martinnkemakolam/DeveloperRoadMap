
import web from './img/web.jpg'
import PageMaker from './page'
import Header from './components/header'
import RecentSwiper from './components/recentswiper'
import General from './components/general';
import MessageContainer from './components/messageContainer';
import { createContext, useState } from 'react';
import { validator } from './helperFunc';
import {AiOutlineNotification} from 'react-icons/ai'
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import Form from './components/form';

export let contextForCard = createContext()
function App() {
  let [apiData, setApiData] = useState([{
    name: 'Front-End development',
    src: web,
    details: `Starting with web development can be 
    overwhelming. This front-end developer 
    roadmap will guide you to start with it in the 
    proper way. We will cover the most important 
    building blocks of the web. This guide will help 
    you to become a modern front-end developer`,
    topic: [
      {
        topicHead: 'HTML',
        resources: ['youtube', 'book', 'website'],
        topicSub: ['Basics', 'Emmet', 'Forms', 'Semantic HTML', 'SEO Basics']
      },
      {
        topicHead: 'CSS',
        resources: ['youtube', 'book', 'website'],
        topicSub: ['Basics', 'Emmet', 'Forms', 'Semantic HTML', 'SEO Basics']
      },
      {
        topicHead: 'JavaScript',
        resources: ['youtube', 'book', 'website'],
        topicSub: ['Basics', 'Emmet', 'Forms', 'Semantic HTML', 'SEO Basics']
      },
      {
        topicHead: 'CSS framework',
        resources: ['youtube', 'book', 'website'],
        topicSub: ['Basics', 'Emmet', 'Forms', 'Semantic HTML', 'SEO Basics']
      },
      {
        topicHead: 'JavaScript library',
        resources: ['youtube', 'book', 'website'],
        topicSub: ['Basics', 'Emmet', 'Forms', 'Semantic HTML', 'SEO Basics']
      }
    ]
  },
{
  name: 'Back-End Node development',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},
{
  name: 'Python Web development',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},{
  name: 'UI/UX Design',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},{
  name: 'Fullstack JavaScript development',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},{
  name: 'Back-End Python development',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},{
  name: 'Mobile development',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},{
  name: 'Game development',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},{
  name: 'Syber Security',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},
{
  name: 'Data Science',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},
{
  name: 'Blender artist',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
}])
let [apiMsg, setApiMsg] = useState([])
let [userData, setUserData] = useState([])
let [classNameMsg, setClassNameMsg] = useState(false)
let [filter, setFilter] = useState('')
let [isPageOpen, setIsPageOpen] = useState(true)
let [pageData, setPageData] = useState({})
let openMsgFunc =()=>{
  setClassNameMsg(true)
}
let closeMsgFunc =()=>{
  setClassNameMsg(false)
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
  let data = apiData.filter((item)=> item.name === arg)
  setPageData(...data)
  setIsPageOpen(false)
}
let removePage=()=>{
  setIsPageOpen(true)
}
  return (
    <BrowserRouter>
    <MessageContainer isOpen={classNameMsg} closeFunc={closeMsgFunc}/>
      <Routes>
        <Route path='/' element={
           isPageOpen ?
            <>
              <Header filterRoadmaps={filterRoadmaps}/>
              <div className='rightSide'>
                <AiOutlineNotification className='headerIcon' onClick={()=> openMsgFunc()}/>
              </div>
              <RecentSwiper userData={userData} deleteFunc={deleteLastswiperFunc} selectTrack={selectTrack} rearrangeFunc={userDataRearrange}/>
              <contextForCard.Provider value={addToUserDataFunc}>
                <General apiData={apiData} filter={filter} selectTrack={selectTrack}/>
              </contextForCard.Provider>
            </> : <PageMaker mapAry={pageData} removePage={removePage}/>}/>
        <Route path='/contribute' element={<Form/>}/>
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;
