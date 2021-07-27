const SelectPortfolio = (props) => {
    const handleChange = (e) => {
        console.log(e.target.value)
        props.choosePortfolio(e.target.value)
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
        {/* <input type="submit" value="Submit" /> */}
      </form>
    )
}

export default SelectPortfolio;


{/* <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form> */}