import { useState } from 'react'

const SpendSave = (props) => {
  const { save, spend, setSave, setSpend } = props
  const [inputSave, setInputSave] = useState(0)
  const [inputSpend, setInputSpend] = useState(0)

  const handleChange = (e) => {
    e.target.name === 'spend' 
      ? (e.target.value > 1000000 ? setInputSpend(1000000) : setInputSpend(e.target.value))
      : (e.target.value > 1000000 ? setInputSave(1000000) : setInputSave(e.target.value))
  }

  const handleClick = (e) => {
    e.preventDefault()
    let newSave = (+save) + (+inputSave)
    let newSpend = (+spend) + (+inputSpend)
    setSave(newSave)
    setSpend(newSpend)
    setInputSave(0)
    setInputSpend(0)
  }

  return (
    <form action="submit">
      <label>Daily savings:</label>
      <input
        type="number"
        name="save"
        value={inputSave}
        onChange={handleChange}
        required
      />
      <label>Daily expenses:</label>
      <input
        type="number"
        name="spend"
        value={inputSpend}
        onChange={handleChange}
        required
      />

      <button onClick={handleClick}>Add entries</button>
    </form>
  );
}

export default SpendSave;