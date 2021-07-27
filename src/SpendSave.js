import {useState} from 'react'

const SpendSave = (props) => {
  const [inputSave, setInputSave] = useState(0)  
  const [inputSpend, setInputSpend] = useState(0)

  const handleChange = (e) => {
    e.target.name === 'spend' ? setInputSpend(e.target.value) : setInputSave(e.target.value)
  }

  const handleClick = (e) => {
    let newSave = (+props.save) + (+inputSave)
    let newSpend = (+props.spend) + (+inputSpend)
    props.updateSave(newSave)
    props.updateSpend(newSpend)
    setInputSave("")
    setInputSpend("")
  }

  return (
    <form action="submit">
      <label>How much did you spend today?</label>
        <input
          type="number"
          name="spend"
          value={inputSpend}
          onChange={handleChange}
          required
        />
       
      <label>How much did you save today?</label>
        <input
          type="number"
          name="save"
          value={inputSave}
          onChange={handleChange}
          required
        />
      <button onClick={handleClick}>Log values</button>
    </form>
  );
}

export default SpendSave;