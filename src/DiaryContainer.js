import { useState, useEffect } from 'react';
import firebase from './firebase';
import SelectPortfolio from './SelectPortfolio'
import SpendSave from './SpendSave'
import DisplayPortfolioValues from './DisplayPortfolioValues';

function DiaryContainer() {
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
        <div className="diaryContainer">
            <div className="spendingContainer">
            <SelectPortfolio setChosenPortfolio={setChosenPortfolio} />
            <SpendSave save={save} setSave={setSave} spend={spend} setSpend={setSpend} />
            </div>
            {
                save !== 0 || spend !== 0 ? (<DisplayPortfolioValues save={save} spend={spend} portfolioParams={portfolioParams} />) : null
            }
        </div>
    );
}

export default DiaryContainer;