import firebase from './firebase';
import ChatPage1 from './ChatPage1'
import ChatPage2 from './ChatPage2'
import ChatPage3 from './ChatPage3'
import ChatPage4 from './ChatPage4'
import { useState, useEffect } from 'react'

//Chatcontainer houses the other portion of the app, and uses state to render each component when it is ready, it also houses all the states that will we eventually use to make our Monte Carlo Simulation
const ChatContainer = () => {
    const [market, setMarket] = useState("cash")
    const [marketParams, setMarketParams] = useState([])
    const [retirementYears, setRetirementYears] = useState(0)
    const [retirementAmount, setRetirementAmount] = useState(0)
    const [name, setName] = useState("Jane Doe")
    const [annualSavings, setAnnualSavings] = useState(0)
    const [amountSaved, setAmountSaved] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        const dbRef = firebase.database().ref()

        dbRef.on('value', (response) => {
            setMarketParams([response.val().segments[market].aar, response.val().segments[market].sd])
        })

    }, [market])

    return (
        <div className="chatContainer">
            {
                pageNumber === 1
                    ? <ChatPage1 setName={setName} setRetirementAmount={setRetirementAmount} setRetirementYears={setRetirementYears} setPageNumber={setPageNumber} pageNumber={pageNumber} />
                    : pageNumber === 2
                        ? <ChatPage2 setMarket={setMarket} setAnnualSavings={setAnnualSavings} setAmountSaved={setAmountSaved} setPageNumber={setPageNumber} pageNumber={pageNumber} />
                        : pageNumber === 3
                            ? <ChatPage3 name={name} retirementYears={retirementYears} annualSavings={annualSavings} amountSaved={amountSaved} market={market} setPageNumber={setPageNumber} pageNumber={pageNumber} />
                            : <ChatPage4 retirementYears={retirementYears} annualSavings={annualSavings} amountSaved={amountSaved} marketParams={marketParams} retirementAmount={retirementAmount} />
            }

        </div>
    )
}

export default ChatContainer