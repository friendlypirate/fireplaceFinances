import {useState} from 'react'

const ChatPage2 = (props) => {
    const {name, retirementYears, retirementAmount, setMarket, setAnnualSavings, setAmountSaved} = props
    const [savedInput, setSavedInput] = useState(0)
    const [savingsInput, setSavingsInput] = useState(0)
    const [marketInput, setMarketInput] = useState("cash")

    const handleChange = (e) => {
        e.target.name === 'amountSaved' 
            ? setSavedInput(e.target.value)
            : e.target.name === 'annualSavings'
                ? setSavingsInput(e.target.value)
                : setMarketInput(e.target.value)
        console.log(marketInput)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setMarket(marketInput)
        setAnnualSavings(savingsInput)
        setAmountSaved(savedInput)
        //Reset maybe
    }

    return (
        <div>
            <p>Thanks for the details, let me dig a little deeper...</p>
            <form className="about-you" action="submit">

                <label htmlFor="amountSaved">How much have you saved?</label>
                <input name="amountSaved" type="number" placeholder="100000" required onChange={handleChange}/>

                <label htmlFor="annualSavings">How much will you save each year?</label>
                <input name="annualSavings" type="number" placeholder="5000" required onChange={handleChange}/>

                <label htmlFor="market">
                    Pick your investment market:
                    <select name="market" required onChange={handleChange}>
                        <option value="cash" selected>T-Bills - Annualized Return 1.43%, Standard Deviation 0.45%</option>
                        <option value="bonds">Bonds - Annualized Return 4.83%, Standard Deviation 3.41%</option>
                        <option value="largeCapValue">Large Cap Value - Annualized Return 6.82%, Standard Deviation 15.34%</option>
                        <option value="largeCapGrowth">Large Cap Growth - Annualized Return 8.27%, Standard Deviation 16.55%</option>
                        <option value="smallCap">Small Cap - Annualized Return 9.44%, Standard Deviation 18.75%</option>
                        <option value="reit">Real Estate Investment Trust - Annualized Return 9.71%, Standard Deviation 20.06%</option>
                    </select>
                </label>

                <button className="btn btn-primary" onClick={handleClick}>Send</button>
            </form>
        </div>
    )
}

export default ChatPage2