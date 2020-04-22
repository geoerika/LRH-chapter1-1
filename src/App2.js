import React from 'react'
import ReactDOM from 'react-dom'

let values = []
let currentHook = 0

function useState (initialState) {

  if (typeof values[currentHook] === 'undefined') values[currentHook] = initialState
  let hookIndex = currentHook
  function setState (nextValue) {
    values[hookIndex] = nextValue
    ReactDOM.render(<MyName />, document.getElementById('root'))
  }

  return [values[currentHook++], setState]

}

function MyName () {
  currentHook = 0
  const [name, setName] = useState('')
  const [lastName, setLastName ] = useState('')
  const [enableFirstName, setEnableFirstName] = useState(false)

  const handleChange = (evt) => {
    setName(evt.target.value)
  }
  const handleLastNameChange = (evt) => {
    setLastName(evt.target.value)
  }

  const handleEnableChange = (evt) => {
    setEnableFirstName(!enableFirstName)
  }

  return (
    <div>
      <h1>My name is: { enableFirstName ? name : '' } { lastName }</h1>
      <input type='checkbox' value={enableFirstName} onChange={ handleEnableChange } />
      <input type='text' value={ name } onChange={ handleChange } />
      <br/>
      <input type='text' value={lastName} onChange={handleLastNameChange} />
    </div>

  )
}

export default MyName