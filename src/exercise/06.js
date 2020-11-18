import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, updateUsername] = React.useState('')

  function handleChange(event) {
    updateUsername(event.target.value.toLowerCase())
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Username:</label>
        <input id="name" type="text" onChange={handleChange} value={username} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
