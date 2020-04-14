import React from 'react'
import ReactDOM from 'react-dom'

let values = []
let currentHook = 0

function useState (initialState) {
  let hookIndex = currentHook
  if (typeof values[currentHook] === 'undefined') values[currentHook] = initialState

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

  const handleChange = (evt) => {
    setName(evt.target.value)
  }
  const handleLastNameChange = (evt) => {
    setLastName(evt.target.value)
  }

  return (
    <div>
      <h1>My name is: { name } { lastName }</h1>
        <input type='text' value={ name } onChange={ handleChange } />
        <br/>
        <input type='text' value={lastName} onChange={handleLastNameChange} />
    </div>

  )
}

export default MyName