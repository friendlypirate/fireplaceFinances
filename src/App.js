import './App.css';
import { useState, useEffect } from 'react';
import firebase from './firebase';
import SelectPortfolio from './SelectPortfolio'
import SpendSave from './SpendSave'
import DisplayPortfolioValues from './DisplayPortfolioValues';
import AppMode from './AppMode'
import ChatContainer from './ChatContainer'

function App() {
  const [appMode, setAppMode] = useState("")
  const [chosenPortfolio, setChosenPortfolio] = useState("conservative")
  const [portfolioParams, setPortfolioParams] = useState([])
  const [save, setSave] = useState(0)
  const [spend, setSpend] = useState(0)

  useEffect(() => {
    const dbRef = firebase.database().ref()

    dbRef.on('value', (response) => {
      setPortfolioParams([response.val().portfolio[chosenPortfolio].aar, response.val().portfolio[chosenPortfolio].sd])
  })

  }, [chosenPortfolio])
  return (
    <div className="App">
      <AppMode chooseAppMode={setAppMode}/>
      <SelectPortfolio choosePortfolio={setChosenPortfolio} />
      <SpendSave save={save} updateSave={setSave} spend={spend} updateSpend={setSpend} />
      {/* <DisplayPortfolioValues save={save} spend={spend} /> */}
      {
        save !== 0 || spend !==0 ? (<DisplayPortfolioValues save={save} spend={spend} portfolioParams={portfolioParams}/>) : null
      }
      <ChatContainer />
    </div>
  );
}

export default App;
