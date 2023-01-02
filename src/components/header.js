import { useRef} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
function Header({filterRoadmaps}) {
    let ref = useRef()
    let changeEvent =()=>{
        let value = ref.current.value
        filterRoadmaps(value)
    }
    return(
    <header>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <AiOutlineSearch className='headerIcon'/>
            <input ref={ref} onChange={changeEvent} placeholder='Search for a Roadmap'></input>
        </form>
    </header>
    )
}

export default Header