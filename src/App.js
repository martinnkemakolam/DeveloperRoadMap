
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
    data: [
      {
      date: 'Welcome to the journy',
      detail: [
        'read topics',
        'copy resourses',
        'take tests',
        'go further'
      ]
    }
  ],
    topic: [
      {
        topicHead: 'HTML',
        resources: ['youtube', 'book', 'website'],
        topicSub: [
          {
            subtopic: 'Basics',
            extraDetail: 'Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Emmet',
            extraDetail: 'Emmet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Forms',
            extraDetail: 'Forms Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Semantic HTML',
            extraDetail: 'Semantic Html Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'SEO Basics',
            extraDetail: 'SEO Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          }
        ],
        test: [
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML1',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML2',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML3',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML4',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          }
        ],
        testScore: 0
      },
      {
        topicHead: 'CSS',
        resources: ['youtube', 'book', 'website'],
        topicSub: [
          {
            subtopic: 'Basics',
            extraDetail: 'Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Emmet',
            extraDetail: 'Emmet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Forms',
            extraDetail: 'Forms Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Semantic HTML',
            extraDetail: 'Semantic Html Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'SEO Basics',
            extraDetail: 'SEO Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          }
        ],
        test: [
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          }
        ],
        testScore: 0
      },
      {
        topicHead: 'JavaScript',
        resources: ['youtube', 'book', 'website'],
        topicSub: [
          {
            subtopic: 'Basics',
            extraDetail: 'Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Emmet',
            extraDetail: 'Emmet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Forms',
            extraDetail: 'Forms Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Semantic HTML',
            extraDetail: 'Semantic Html Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'SEO Basics',
            extraDetail: 'SEO Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          }
        ],
        test: [
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          }
        ],
        testScore: 0
      },
      {
        topicHead: 'CSS framework',
        resources: ['youtube', 'book', 'website'],
        topicSub: [
          {
            subtopic: 'Basics',
            extraDetail: 'Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Emmet',
            extraDetail: 'Emmet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Forms',
            extraDetail: 'Forms Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Semantic HTML',
            extraDetail: 'Semantic Html Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'SEO Basics',
            extraDetail: 'SEO Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          }
        ],
        test: [
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          }
        ],
        testScore: 0
      },
      {
        topicHead: 'JavaScript library',
        resources: ['youtube', 'book', 'website'],
        topicSub: [
          {
            subtopic: 'Basics',
            extraDetail: 'Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Emmet',
            extraDetail: 'Emmet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Forms',
            extraDetail: 'Forms Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Semantic HTML',
            extraDetail: 'Semantic Html Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'SEO Basics',
            extraDetail: 'SEO Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          }
        ],
        test: [
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          }
        ],
        testScore: 0
      }
    ]
    }
  ,
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
let [apiMsg, setApiMsg] = useState([
  {
    msg: `Thank you for registering to our learning part web application. We'd be using this as a means to inform you about new courses and different additions which have been made to our current course which`,
    read: true,
    date: 'Jan 2nd 2023'
  },
  {
    msg: `We added some updates to the road map FrontEnd web development with react, do well to check it out. This may affect your read data`,
    read: true,
    date: 'Jan 5th 2023'
  },
  {
    msg: `Dear user we would be going on mentainance but do not be worried we would come back harder and stronger giving you new courses like never before and more adequate information`,
    read: true,
    date: 'Jan 9th 2023'
  }
])
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
              resources: item.resources,
              test: item.test,
              testScore: item.testScore,
              topicSub: item.topicSub.map((item, id3)=>{
                if (topicSubID === id3) {
                  return {
                    subtopic: item.subtopic,
                    extraDetail: item.extraDetail,
                    read: !item.read
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
  setPageData(arg)
  setIsPageOpen(false)
}
let removePage=()=>{
  setIsPageOpen(true)
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
  return (
    <BrowserRouter>
    <MessageContainer apiMsg={apiMsg} isOpen={classNameMsg} closeFunc={closeMsgFunc} readFunc={msgRead} readAllFunc={msgReadAll}/>
      <Routes>
        <Route path='/' element={
           isPageOpen ?
            <>
              <Header filterRoadmaps={filterRoadmaps}/>
              <div className={ notifyIcon ?"rightSide noty" : "rightSide"}>
                <AiOutlineNotification className='headerIcon' onClick={()=> openMsgFunc()}/>
              </div>
              <RecentSwiper userData={userData} deleteFunc={deleteLastswiperFunc} selectTrack={selectTrack} rearrangeFunc={userDataRearrange}/>
              <contextForCard.Provider value={addToUserDataFunc}>
                <General apiData={apiData} filter={filter} selectTrack={selectTrack}/>
              </contextForCard.Provider>
            </> :
            <>
            <PageMaker detailFunc={detailFunc} mapArys={apiData} filterName={pageData} updateTest={scoreFunc} toggleReadFunc={toggleReadFunc} removePage={removePage}/>
            </>
             }/>
        <Route path='/contribute' element={<Form/>}/>
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;
