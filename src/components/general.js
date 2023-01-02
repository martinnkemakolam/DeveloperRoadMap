import Card from "./card"
import Rest from "./rest"

function General({apiData, filter, selectTrack}) {
    let data;
    if (filter.length > 0){
        data = apiData.filter((item)=> RegExp(`^${filter}`, 'gi').test(item.name))
    }else{
        data = apiData
    }
    let card = data.map((item, id)=>{
            return(
                <Card key={id} isSmall={false} imgSrc={item.src} nameOfMap={item.name} id={id} selectTrack={selectTrack} details={item.details}/>
            )
    })
    return(
        <div className="general">
            <span>Available Road maps</span>
            <div className='allmap'>
                { card.length === 0 ? <Rest type={'search'}/> : card }
            </div>  
        </div>
    )
}

export default General