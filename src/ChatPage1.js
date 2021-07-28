import { useState } from 'react'

const ChatPage1 = (props) => {
    const [nameInput, setNameInput] = useState("")
    const [yearsInput, setYearsInput] = useState(0)
    const [amountInput, setAmountInput] = useState(0)

    const { setName, setRetirementYears, setRetirementAmount, setPageNumber, pageNumber } = props

    const handleChange = (e) => {
        e.target.name === 'name'
            ? setNameInput(e.target.value)
            : e.target.name === 'retirementAmount'
                ? setAmountInput(e.target.value)
                : e.target.value > 50
                    ? setYearsInput(50)
                    : setYearsInput(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (nameInput === "" || yearsInput <= 0 || amountInput <= 0) {
            return alert("Complete all fields and no negative numbers")
        }

        let newPageNumber = pageNumber + 1
        setName(nameInput)
        setRetirementAmount(amountInput)
        setRetirementYears(yearsInput)
        setPageNumber(newPageNumber)
    }

    return (
        <div>
            <p>Hello friend, have a seat! The fire is warm and the whiskey is chilled. Tell me a little about yourself...</p>
            <form className="about-you">
                <div className="container">

                    <div className="name-container">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={nameInput} required placeholder="Jane Doe" onChange={handleChange} />
                    </div>

                    <div className="yearsContainer">
                        <label htmlFor="retirementYears">How many years until retirement?</label>
                        <input type="number" id="retirementYears" value={yearsInput} required name="retirementYears" placeholder="25" onChange={handleChange} />
                    </div>
                </div>

                <label htmlFor="retirementAmount">How much will you need when retired?</label>
                <input id="retirementAmount" type="number" placeholder="100000" name="retirementAmount" value={amountInput} required onChange={handleChange} />

                <button className="btn btn-primary" onClick={handleClick}>Send</button>
            </form>
        </div>
    )
}

export default ChatPage1