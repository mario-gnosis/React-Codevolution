import React from 'react'

const heading = {
    fontSize: '40px',
    color: 'blue'
}

function Inline() {
    
  return (
    <div className="App">
      <h1 style={heading}>Inline</h1>
      <h2 className="error">Error</h2>
    </div>
  )
}

export default Inline
