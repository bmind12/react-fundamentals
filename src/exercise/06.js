import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState('')
  const inputEl = React.useRef(null)

  function handleChange(event) {
    const value = event.target.value
    const isValid = value === value.toLowerCase()

    setError(isValid ? '' : 'Username must be lower case')
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!error) {
      onSubmitUsername(inputEl.current.value)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Username:</label>
        <input id="name" type="text" onChange={handleChange} ref={inputEl} />
      </div>
      {error && <p role="alert">{error}</p>}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
