import {useState} from 'react'

const ChatPage1 = (props) => {
    const [nameInput, setNameInput] = useState("")
    const [yearsInput, setYearsInput] = useState(0)
    const [amountInput, setAmountInput] = useState(0)

    const {setName, setRetirementYears, setRetirementAmount} = props

    const handleChange = (e) => {
        e.target.name === 'name' 
            ? setNameInput(e.target.value)
            : e.target.name === 'retirementYears'
                ? setYearsInput(e.target.value)
                : setAmountInput(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setName(nameInput)
        setRetirementYears(yearsInput)
        setRetirementAmount(amountInput)
        //reset maybe
    }

    return (
        <div>
            <p>Hello friend, have a seat! The fire is warm and the whiskey is chilled. Tell me a little about yourself...</p>
            <form className="about-you">
                <div className="container">

                    <div className="name-container">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={nameInput} required placeholder="Jane Doe" onChange={handleChange}/>
                    </div>

                    <div className="yearsContainer">
                        <label htmlFor="retirementYears">How many years until retirement?</label>
                        <input type="number" id="retirementYears" value={yearsInput} required name="retirementYears" placeholder="25" onChange={handleChange}/>
                    </div>
                </div>

                <label htmlFor="retirementAmount">How much will you need when retired?</label>
                <input id="retirementAmount" type="number" placeholder="100000" name="retirementAmount" value={amountInput} required onChange={handleChange}/>

                <button className="btn btn-primary" onClick={handleClick}>Send</button>
			</form>
        </div>
    )
}

export default ChatPage1