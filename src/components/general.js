import CardLarge from "./cardlarge"
import Rest from "./rest"
import { useEffect, useRef, useState} from 'react'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
function General({apiData, setIsActive,filter, selectTrack, filterRoadmapsFunc, setOuterId}) {
    let ref = useRef()
    let [genVisible,setGenVisible] = useState(true)
    let changeEvent =()=>{
        let value = ref.current.value
        filterRoadmapsFunc(value)
    }
    let data;
    if (filter.length > 0){
        data = apiData.filter((item)=> RegExp(`${filter}`, 'gi').test(item.name))
    }else{
        data = apiData
    }
    let card = data.map((item, id)=>{
            return(
                <CardLarge key={id} nameOfMap={item.name} id={id} selectTrack={selectTrack} details={item.details} setIsActive={setIsActive} setOuterId={()=>setOuterId(id)}/>
            )
    })
    useEffect(()=>{
        setTimeout(()=>{
            setGenVisible(false)
        }, 1000)
    }, [])
    return(
        <div className={ genVisible ? "general" : "general active"}>
        <div className="head">
            <span>Available Road maps</span>
            <BsFillArrowUpSquareFill className={ genVisible? "head_btn rot" :"head_btn"} onClick={()=> setGenVisible(!genVisible)}/>
        </div>
        <div className="bord">
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <AiOutlineSearch className='headerIcon'/>
                <input ref={ref} onChange={changeEvent} placeholder='Search for a Roadmap'></input>
            </form>
        </div>
            {  card.length !== 0 && 
            <div className='allmap'>
                {card}
            </div>}
            {card.length === 0 && <Rest type={'search'}/>}
        </div>
    )
}

export default General