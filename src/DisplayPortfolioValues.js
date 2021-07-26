const DisplayPortfolioValues = (props) => {
const getPortfolioValue = (amount, years) => {
    return Math.round(amount * Math.pow((1 + props.portfolioParams[0]), years))
}

    return (
        <div>
        <h2>Total Savings: {props.save}</h2>
        <ul>
            <li>Value in 5 years: {getPortfolioValue(props.save, 5)}</li>
            <li>Value in 10 years: {getPortfolioValue(props.save, 10)}</li>
            <li>Value in 25 years: {getPortfolioValue(props.save, 25)}</li>
        </ul>

        <h2>Total Spending: {props.spend}</h2>
        <ul>
            <li>Value loss in 5 years: {getPortfolioValue(props.spend, 5)}</li>
            <li>Value loss in 10 years: {getPortfolioValue(props.spend, 10)}</li>
            <li>Value loss in 25 years: {getPortfolioValue(props.spend, 25)}</li>
        </ul>
        </div>
    )
}

export default DisplayPortfolioValues;