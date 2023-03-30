import {useState } from "react"
import img1 from '../img/web.jpg'
import DataHolder from "./generalInputHolder"
function Form({topic}) {
    let [boolValue, setBoolValue] = useState(false)
    let [dataInput, setDataInput] = useState([
        {
            course: '',
            description: '',
            topic: ['', '']
        },
        {
            course: '',
            description: '',
            topic: ['', '']
        }
    ])
    let popUp=()=>{
        setBoolValue(true)
        setTimeout(()=>{
            setBoolValue(false)
        }, 1000)
    }
    let input=(id, obj)=>{
        if (id <= dataInput.length - 1){
            setDataInput((pre)=>{
                return pre.map((item, index)=>{
                    if (id === index) {
                        return {
                            course: obj.course,
                            description: obj.description,
                            topic: obj.topic
                        }   
                    }else return item
                })
            })
            if (id === dataInput.length - 1) {
                if (/^[\w.]+$/i.test(dataInput[dataInput.length - 2].course) || dataInput[dataInput.length - 2].course.length > 0) {
                    setDataInput(pre=> pre.concat({
                        course: '',
                        description: '',
                        topic: ['', '']
                    }) )   
                }else{
                    popUp()
                }   
            }
        }
    }
    let filterAndAdd=(id)=>{
        if (id === dataInput.length - 1) {
            return
        }else{
            if(/^[\w.]+$/i.test(dataInput[dataInput.length - 1].course)){
                let update = dataInput.filter((item)=> /^[\w.]+$/i.test(item.course) || item.length > 0)
             setDataInput([...update, {
                     course: '',
                     description: '',
                     topic: ['', '']
                }])
            }
        }
    }
    
    return(
        <form className="formBody">
             <div className={ boolValue ? "follow" : 'follow hide'}>Please, try to fill the form in order</div>
             <div className="elementHolder">
                 <div className="head">
                     <img src={img1} className="bigImg"></img>
                     <h1>Contribute to frontend roadmap</h1>
                     <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae dolores iure est? Est iusto repellendus debitis, quibusdam consequatur similique dolorem laborum est? Est iusto repellendus debitis, quibusdam consequatur similique</h2>
                 </div>
                 <div className="dataContainer">
                     {
                        dataInput.map((item, id)=>{
                            return <DataHolder course={item.course} input={input} topic={item.topic} focus={filterAndAdd} descripton={item.description} id={id} key={item + id} popUp={popUp}/>
                    })
                     }
                 </div>
             <input className="btn" type='submit' value='Submit'></input>
             </div>
         </form>
    )
}

export default Form