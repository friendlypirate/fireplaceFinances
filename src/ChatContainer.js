import firebase from './firebase';
import ChatPage1 from './ChatPage1'
import ChatPage2 from './ChatPage2'
import ChatPage3 from './ChatPage3'
import ChatPage4 from './ChatPage4'
import {useState, useEffect} from 'react'

const ChatContainer = () => {
    const [market, setMarket] = useState("cash")
    const [marketParams, setMarketParams] = useState([])
    const [retirementYears, setRetirementYears] = useState(0)
    const [retirementAmount, setRetirementAmount] = useState(0)
    const [name, setName] = useState("Jane Doe")
    const [annualSavings, setAnnualSavings] = useState(0)
    const [amountSaved, setAmountSaved] = useState(0)
    const [displaySimulation, setDisplaySimulation] = useState(false)

    useEffect(() => {
        const dbRef = firebase.database().ref()
    
        dbRef.on('value', (response) => {
          setMarketParams([response.val().segments[market].aar, response.val().segments[market].sd])
      })
    
      }, [market])


    return (
        <div>
        <ChatPage1 setName={setName} setRetirementAmount={setRetirementAmount} setRetirementYears={setRetirementYears}/>
        <ChatPage2 setMarket={setMarket} setAnnualSavings={setAnnualSavings} setAmountSaved={setAmountSaved}/>
        <ChatPage3 name={name} retirementYears={retirementYears} annualSavings={annualSavings} amountSaved={amountSaved} market={market} setDisplaySimulation={setDisplaySimulation}/>
        {
            displaySimulation == true ? <ChatPage4 retirementYears={retirementYears} annualSavings={annualSavings} amountSaved={amountSaved} marketParams={marketParams} retirementAmount={retirementAmount}/> : null
        }
        </div>
    )
}

export default ChatContainer