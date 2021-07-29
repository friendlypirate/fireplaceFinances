const DisplayPortfolioValues = (props) => {
    const { save, spend, portfolioParams } = props
    //Function to return portfolio value given parameters
    const getPortfolioValue = (amount, years) => {
        return Math.round(amount * Math.pow((1 + portfolioParams[0]), years))
    }

    return (
        <div className="displayPortfolioValues">
            <h2>Total Savings:</h2>
            <h2>${save.toLocaleString()}</h2>
            <ul>
                <li> 5-yrs: ${getPortfolioValue(save, 5).toLocaleString()}</li>
                <li>10-yrs: ${getPortfolioValue(save, 10).toLocaleString()}</li>
                <li>25-yrs: ${getPortfolioValue(save, 25).toLocaleString()}</li>
            </ul>

            <h2>Total Spending:</h2>
            <h2>${spend.toLocaleString()}</h2>
            <ul>
                <li> 5-yrs loss: ${getPortfolioValue(spend, 5).toLocaleString()}</li>
                <li>10-yrs loss: ${getPortfolioValue(spend, 10).toLocaleString()}</li>
                <li>25-yrs loss: ${getPortfolioValue(spend, 25).toLocaleString()}</li>
            </ul>
        </div>
    )
}

export default DisplayPortfolioValues;