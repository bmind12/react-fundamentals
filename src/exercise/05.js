import * as React from 'react'
import '../box-styles.css'

const Box = props => {
  return (
    <div
      className={`box ${props.className}`}
      style={{fontStyle: 'italic', ...props.style}}
    >
      {props.children}
    </div>
  )
}

const smallBox = (
  <div
    className="box box--small"
    style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{backgroundColor: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{backgroundColor: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
