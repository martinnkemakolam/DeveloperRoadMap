
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
      date: '8th Fed 2022',
      detail: [
        'clicked read to topic(HTML)',
        'clicked unread to topic(HTML)',
        'took a test on HTML',
        'copied resource under topic(HTML)'
      ]
    },
    {
      date: '9th Fed 2022',
      detail: [
        'clicked read to topic(HTML)',
        'clicked unread to topic(HTML)',
        'took a test on HTML',
        'copied resource under topic(HTML)'
      ]
    },
    {
      date: '10th Fed 2022',
      detail: [
        'clicked read to topic(HTML)',
        'clicked unread to topic(HTML)',
        'took a test on HTML',
        'copied resource under topic(HTML)'
      ]
    },
    {
      date: '11th Fed 2022',
      detail: [
        'clicked read to topic(HTML)',
        'clicked unread to topic(HTML)',
        'took a test on HTML',
        'copied resource under topic(HTML)'
      ]
    },
    {
      date: '12th Fed 2022',
      detail: [
        'clicked read to topic(HTML)',
        'clicked unread to topic(HTML)',
        'took a test on HTML',
        'copied resource under topic(HTML)'
      ]
    },
    {
      date: '13th Fed 2022',
      detail: [
        'clicked read to topic(HTML)',
        'clicked unread to topic(HTML)',
        'took a test on HTML',
        'copied resource under topic(HTML)',
        'clicked read to topic(HTML)',
        'clicked unread to topic(HTML)',
        'took a test on HTML',
        'copied resource under topic(HTML)'
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
let toggleReadFunc = ( courseName,topicID, topicSubID)=>{
  let newApiData = apiData.map((item, id)=>{
    if (item.name === courseName ) {
      return {
        name: item.name,
        src: item.src,
        details: item.details,
        data: item.data,
        topic: item.topic.map((item, id2)=>{
          if (topicID === id2) {
            console.log('reached')
            return {
              topicHead: item.topicHead,
              resources: item.resources,
              test: item.test,
              testScore: item.testScore,
              topicSub: item.topicSub.map((item, id3)=>{
                if (topicSubID === id3) {
                  console.log('last reach')
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
  })
  setApiData(newApiData)
}
let scoreFunc = ( courseName, topicName, newScore)=>{
  console.log(newScore)
  let newApiData = apiData.map((item, id)=>{
    if (item.name === courseName ) {
      return {
        name: item.name,
        src: item.src,
        details: item.details,
        data: item.data,
        topic: item.topic.map((item, id2)=>{
          if (topicName === item.topicHead) {
            console.log(topicName)
            console.log('reached')
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
  })
  setApiData(newApiData)
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
            </> :
            <>
            {console.log('rerender App')}
                {console.log(apiData[0])}
            <PageMaker  mapArys={apiData} filterName={pageData} updateTest={scoreFunc} toggleReadFunc={toggleReadFunc} removePage={removePage}/>
            </>
             }/>
        <Route path='/contribute' element={<Form/>}/>
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;
