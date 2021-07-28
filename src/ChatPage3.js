import { useState } from 'react'

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
            }, 500)
        }
    }

    return (
        <div>
            {
                generateResults === 1
                    ? <p>What a lovely story you have {name}, full of intrigue and wonder.  I see you have {amountSaved > 0 ? "started saving for your retirement, that puts you ahead of many of your peers" : "have not started saving for your retirement yet, but we are here to help you with that"}.  Your choice to {annualSavings > 0 ? "start regular savings will go far in achieving your retirement plans" : "not start regular savings is understandable, but we will try to work around it"}.  The greatest asset you have is {retirementYears > 20 ? "time frame, there is plenty of time to grow your portfolio" : "that you seeked financial advice, we can help you maximize your savings and achieve your retirement dreams"}.</p>
                    : generateResults === 2
                        ? <p>Most banks or financial planners will show you only a snapshot of what your portfolio would be if the market behaved perfectly.  An aggressive portfolio may gain 9% per year on average but we have to take into account volatility, and a measure of this is called standard deviation(SD).  Each asset class has a historical SD, with a higher SD denoting higher volatity.</p>
                        : generateResults === 3
                            ? <p>With so many variables have varying probabilities, it is impossible to fully predict the future.  What we can do instead is perform a Monte Carlo simulation, which attempts to predict the outcome of an event, in this case is your retirement goals, despite random variables being introduced.  In simple terms, we are going to take all our parameters, predictable and unpredictable, and build a model that simulates it many thousands of times to generate probabilities of success.  The full simulation make take a while, are you ready?</p>
                            : <h3>Running simulations...</h3>

            }
            {
                generateResults !== 4 ? <button onClick={handleClick}>Read more</button> : null
            }
        </div>
    )
}

export default ChatPage3