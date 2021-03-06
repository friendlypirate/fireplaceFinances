import { useState } from 'react'

//Same as Page1, gets user input, sets new state, passes back to parent
const ChatPage2 = (props) => {
    const { setMarket, setAnnualSavings, setAmountSaved, setPageNumber, pageNumber } = props
    const [savedInput, setSavedInput] = useState(0)
    const [savingsInput, setSavingsInput] = useState(0)
    const [marketInput, setMarketInput] = useState("cash")

    const handleChange = (e) => {
        e.target.name === 'amountSaved'
            ? (e.target.value > 50000000 ? setSavedInput(50000000) : setSavedInput(e.target.value))
            : e.target.name === 'annualSavings'
                ? (e.target.value > 50000000 ? setSavingsInput(50000000) : setSavingsInput(e.target.value))
                : setMarketInput(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (savedInput === undefined || savingsInput === undefined) {
            return alert("Fill out all inputs")
        }
        let newPageNumber = pageNumber + 1
        setMarket(marketInput)
        setAnnualSavings(savingsInput)
        setAmountSaved(savedInput)
        setPageNumber(newPageNumber)
    }

    return (
        <div className="chatPage chatPage2">
            <p>Thank you for sharing that amazing story, lets dig a little deeper...</p>
            <form className="chatPage2Form" action="submit">

                <div>
                    <label htmlFor="amountSaved">How much have you saved?</label>
                    <input name="amountSaved" value={savedInput} type="number" placeholder="10000" required onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="annualSavings">How much will you save each year?</label>
                    <input name="annualSavings" value={savingsInput} type="number" placeholder="5000" required onChange={handleChange} />
                </div>
                <div className="chatPage2SelectContainer">
                    <label htmlFor="market">
                        Pick your investment market:
                    <select name="market" required onChange={handleChange}>
                            <option value="cash" defaultValue>T-Bills - Annualized Return 1.43%, Standard Deviation 0.45%</option>
                            <option value="bonds">Bonds - Annualized Return 4.83%, Standard Deviation 3.41%</option>
                            <option value="largeCapValue">Large Cap Value - Annualized Return 6.82%, Standard Deviation 15.34%</option>
                            <option value="largeCapGrowth">Large Cap Growth - Annualized Return 8.27%, Standard Deviation 16.55%</option>
                            <option value="smallCap">Small Cap - Annualized Return 9.44%, Standard Deviation 18.75%</option>
                            <option value="reit">Real Estate Investment Trust - Annualized Return 9.71%, Standard Deviation 20.06%</option>
                        </select>
                    </label>
                </div>
                <button onClick={handleClick}>Send</button>
            </form>
        </div>
    )
}

export default ChatPage2