const SelectPortfolio = (props) => {
    const {setChosenPortfolio} = props

    const handleChange = (e) => {
        setChosenPortfolio(e.target.value)
    }

    return (
        <form>
        <label htmlFor="choosePortfolio">
          Pick your risk profile:
          <select name="choosePortfolio" onChange={handleChange}>
            <option value="conservative">Conservative</option>
            <option value="moderate">Moderate</option>
            <option value="aggressive">Aggressive</option>
          </select>
        </label>
      </form>
    )
}

export default SelectPortfolio;