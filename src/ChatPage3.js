import { useState } from 'react'

//Component renders conditional information based on users inputs, then explains the need for a Monte Carlo, adding a rendering of "Loading" portion at the end to let user visualize the Monte Carlo Call.  I found how to do the animations online.  The skewing was relatively simple, the other one was a more complicated, I copied the code and just changed a few things to my liking.  The code was found on Code Pen.  
const ChatPage3 = (props) => {
    const { name, retirementYears, annualSavings, amountSaved, setPageNumber, pageNumber } = props
    const [generateResults, setGenerateResults] = useState(1)

    const handleClick = (e) => {
        e.preventDefault()
        let newResults = generateResults + 1
        setGenerateResults(newResults)
        if (newResults === 4) {
            let newPageNumber = pageNumber + 1
            setTimeout(() => {
                setPageNumber(newPageNumber)
            }, 20000)
        }
    }

    return (
        <div className="chatPage chatPage3">
            {
                generateResults === 1
                    ? <p>What an intriguing and lovely story {name}.  You have {amountSaved > 0 ? "started saving for  retirement, that puts you ahead of many of your peers" : "not started saving for retirement yet, but we are here to help with that"}.  Your choice to {annualSavings > 0 ? "start regular savings will go far in achieving your retirement plans" : "not start regular savings is understandable, but we will work around it"}.  The greatest asset you have is {retirementYears > 20 ? "time frame, which will help to grow your portfolio" : "that you seeked financial advice, we can help maximize savings and achieve retirement freedom"}.</p>
                    : generateResults === 2
                        ? <p>Most banks or financial planners will show only a snapshot of what the portfolio would be if the market behaved perfectly.  An aggressive portfolio may gain 9% average but that does not take into account volatility, and a measure of this is called standard deviation(SD).  Each asset class has a historical SD, with a higher SD denoting higher volatity.</p>
                        : generateResults === 3
                            ? <p>What we can do instead is perform a Monte Carlo simulation, which attempts to predict the outcome of an event, in this case is your retirement goals, despite random variables being introduced.  In simple terms, we are going to take all parameters, predictable and unpredictable, then build a model that simulates it thousands of times to generate probabilities of success.  The full process will take a while, are you ready?</p>
                            : <div className="chatPage3LoadingContainer">
                                <h3>Running simulations...</h3>
                                <p className="moneyMove">💸</p>
                            </div>
            }
            {
                generateResults !== 4 ? <div className="chatPage3ButtonContainer"><button onClick={handleClick}>Read more</button></div> : null
            }
        </div>
    )
}

export default ChatPage3