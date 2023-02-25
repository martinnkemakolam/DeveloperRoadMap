import { useState } from "react"

function Test({ Topics,data, backFunc}) {
    let [view, setView] = useState(0)
    let [classNameOpt, setClassNameOpt] = useState()
    let testTemplateData = Topics.filter((item)=> item.topicHead === data)
    let testTemplate = testTemplateData[0].test.map((item, id)=>{
        let optionMap = item.options.map((item, id2)=>{
            return(
                <div key={id2} className={ classNameOpt === id2 ? 'answer clicked' : 'answer'} onClick={()=> setClassNameOpt(id2)}>{item}</div>
            )
        })
        return(
            <div className="questionHolder" key={id}>
                <p>{item.question}</p>
                <div className="answersHolder">
                    {optionMap}
                </div>
            </div>
        )
    })
    let testTemplateInView = testTemplate[view]
    return(
        <div className="testHolder">
            <div className="testDetail">
                <h1>{data}</h1>
                <p>
                    Try taking this test with honesty as we use it to get data in other for you to track where you may or may not need to put in the extra effort. The questions here are gotten from the resources set out for you to read, some questions may not come from their because we would like to encourage you to make personal research. we would try our best to make the questions complex to see if you actually understand and at the end of the test the topic which questions you failed most would be presented in order for you to focus more on that topic
                </p>
            </div>
            <div className="questions">
                {testTemplateInView}
            </div>
            { testTemplateData[0].test.length - 1 !== view ? 
            <button onClick={()=>{
                setView(view + 1)
                setClassNameOpt()
                }}>Next question</button>
        : <button onClick={()=>{
            backFunc()
            }}>Submit</button>
            }
            </div>
    )
}

export default Test