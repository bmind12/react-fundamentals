import * as React from 'react'
import '../box-styles.css'

const Box = ({size = 'small', style, children}) => {
  return (
    <div className={`box box--${size}`} style={{fontStyle: 'italic', ...style}}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
    </div>
  )
}

export default App
