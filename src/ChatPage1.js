import { useState } from 'react'

//First Page gets some user info, passes it back to parent who will pass it to later child
const ChatPage1 = (props) => {
    const [nameInput, setNameInput] = useState("")
    const [yearsInput, setYearsInput] = useState(0)
    const [amountInput, setAmountInput] = useState(0)

    const { setName, setRetirementYears, setRetirementAmount, setPageNumber, pageNumber } = props

    const handleChange = (e) => {
        e.target.name === 'name'
            ? setNameInput(e.target.value)
            : e.target.name === 'retirementAmount'
                ? (e.target.value > 50000000 ? setAmountInput(50000000) : setAmountInput(e.target.value))
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
        <div className="chatPage chatPage1">
            <p>Hello friend! The fire is warm and the whiskey is chilled. Tell me a little about yourself...</p>
            <form className="chatPage1Form">
                <div className="nameContainer">
                    <label htmlFor="name">Name/Alias:</label>
                    <input type="text" id="name" name="name" value={nameInput} required placeholder="Jane Doe" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="retirementAmount">Retirement fund needed:</label>
                    <input id="retirementAmount" type="number" placeholder="100000" name="retirementAmount" value={amountInput} required onChange={handleChange} />
                </div>
                <div className="yearsContainer">
                    <label htmlFor="retirementYears">Years until retirement:</label>
                    <input type="number" id="retirementYears" value={yearsInput} required name="retirementYears" placeholder="25" onChange={handleChange} />
                </div>

                <button onClick={handleClick}>Send</button>
            </form>
        </div>
    )
}

export default ChatPage1