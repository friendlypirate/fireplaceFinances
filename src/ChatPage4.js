//The last component to Chat, it houses a two functions, one that uses a formula to get a random variable in a normal distribution given Mean and SD.  The Other function Simulations uses the first function to generate an array of yearly gains that we then use to figure out ending portfolio value.  It does this 1000 times thus producing our Monte Carlo simulation.  The rest of the functions are used show vital information to the user.
const ChatPage4 = (props) => {
    const { retirementYears, annualSavings, amountSaved, marketParams, retirementAmount } = props
    const monteCarloSimulations = []
    const boxMullerTransform = (mean, sd) => {
        let x = Math.sqrt(-2.0 * Math.log(Math.random())) * Math.cos((Math.PI * 2) * Math.random());
        return x * sd + mean;
    }

    const simulations = (years, annual, saved, mean, sd) => {
        let simulationRates = []
        const singleSimulation = () => {
            for (let i = 0; i < years; i++) {
                simulationRates.push(boxMullerTransform(mean, sd));
            }
            let simulationValue = simulationRates.reduce((a, b) => {
                console.log(a)
                return a = (a + annual) * (1 + (+b))
            }, saved)
            return (Math.round(simulationValue))
        }

        let i = 1
        while (i <= 1000) {
            monteCarloSimulations.push(singleSimulation())
            simulationRates = []
            i++
        }
        monteCarloSimulations.sort((a, b) => b - a)
    }

    simulations(+retirementYears, +annualSavings, +amountSaved, marketParams[0], marketParams[1])

    const percentile = (index) => monteCarloSimulations[index * 10]

    let percentageSuccess = (monteCarloSimulations.findIndex(x => x < retirementAmount) / 10).toFixed(2)
    let averagePortfolioValue = monteCarloSimulations.reduce((a, b) => a = a + b) / 1000

    return (
        <div className="chatPage chatPage4">
            <h2>Monte Carlo Simulation Results</h2>
            <ul>
                <li>Probability of Success: {percentageSuccess < 0 ? "100" : percentageSuccess}%</li>
                <li>Average value: ${averagePortfolioValue.toLocaleString()}</li>
                <li>90th Percentile Value: ${percentile(10).toLocaleString()}</li>
                <li>75th Percentile Value: ${percentile(25).toLocaleString()}</li>
                <li>50th Percentile Value: ${percentile(50).toLocaleString()}</li>
                <li>25th Percentile Value: ${percentile(75).toLocaleString()}</li>
                <li>10th Percentile Value: ${percentile(90).toLocaleString()}</li>
            </ul>
        </div>
    )
}

export default ChatPage4