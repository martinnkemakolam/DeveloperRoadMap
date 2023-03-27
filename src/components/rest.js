import img from '../img/Rest2.jpg'
import img2 from '../img/resultErr.jpg'
import img3 from '../img/msgRest.jpg'
function Rest({type, returnFunc}) {
    let restData = [
        {
            name: 'swipper',
            span: 'Grab your learning process with your hands by picking a roadmap',
            src: img
        },
        {
            name: 'search',
            span: 'I am sorry we did not get that or this roadmap has not been added yet',
            src: img2
        },
        {
            name: 'msg',
            span: 'You have no messages yet, We would let you know if you got any',
            src: img3
        },
        {
            name: 'course',
            span: 'Seems we have not added content to this roadmap yet, sorry about that try exploring other roadmaps i.e frontend roadmap',
            src: img2
        }
    ]
    let rest = restData.map((item,id)=>{
        if (item.name === type){
        return(
            <div className={item.name === 'course' ? 'rest marg' : 'rest'} key={id}>
                <span>{item.span}</span>
                <img src={item.src}></img>
                {item.name === 'course' && <button onClick={()=> returnFunc()}>Go back</button>}
            </div>
        )
        }
    })
    return (
        <>
        {rest}
        </>
    )
}

export default Rest