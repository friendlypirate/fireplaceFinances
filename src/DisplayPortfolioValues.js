const DisplayPortfolioValues = (props) => {
    const { save, spend, portfolioParams } = props
    const getPortfolioValue = (amount, years) => {
        return Math.round(amount * Math.pow((1 + portfolioParams[0]), years))
    }

    return (
        <div>
            <h2>Total Savings: {save}</h2>
            <ul>
                <li>Value in 5 years: {getPortfolioValue(save, 5)}</li>
                <li>Value in 10 years: {getPortfolioValue(save, 10)}</li>
                <li>Value in 25 years: {getPortfolioValue(save, 25)}</li>
            </ul>

            <h2>Total Spending: {spend}</h2>
            <ul>
                <li>Value loss in 5 years: {getPortfolioValue(spend, 5)}</li>
                <li>Value loss in 10 years: {getPortfolioValue(spend, 10)}</li>
                <li>Value loss in 25 years: {getPortfolioValue(spend, 25)}</li>
            </ul>
        </div>
    )
}

export default DisplayPortfolioValues;