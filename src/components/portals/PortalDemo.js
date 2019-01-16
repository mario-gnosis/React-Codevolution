import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
   
      <h3 className="App">Portal de demonstração</h3>,
      document.getElementById('portal-root')

    
  )
}

export default PortalDemo
