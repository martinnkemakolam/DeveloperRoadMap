import { useState } from "react"

function Test({ Topics,data, backFunc}) {
    let [view, setView] = useState(0)
    let answer = []
    let testTemplateData = Topics.filter((item)=> item.topicHead === data)
    testTemplateData[0].test.forEach(element => {
        answer.push(element.answer)
    });
    let [userAnswer, setUserAnswer] = useState([])
    let callNextQuestion = (questionID, item)=>{
        if (userAnswer.length === testTemplateData[0].test.length) {
            setUserAnswer([...userAnswer, item])
            submitFunc()
            return
        }
        setUserAnswer([...userAnswer, item])
        frontMove()
    }
    let testTemplate = testTemplateData[0].test.map((item, id)=>{
        let optionMap = item.options.map((item, id2)=>{
            return(
                <div key={id2} className="answer" onClick={()=> callNextQuestion( id, item)}>{item}</div>
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
    var submitFunc=()=>{
        let score = 0 
        console.log(userAnswer)
        answer.forEach((ele, id)=>{
            if (userAnswer[id] === ele) {
                score = score + 1
            }
        })
        console.log(score)
        setUserAnswer()
        backFunc(score)
    }
    var frontMove =() =>{
        if (testTemplateData[0].test.length - 1 === view) {
            return
        }
        setView(view + 1)
    }
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
            <div>
                 <button onClick={()=> submitFunc()}>Submit</button>
            </div>
        </div>
    )
}

export default Test