import React from 'react'

function MemoComp({name}) {

    console.log('Renderizando Memo Component')
  return (
    <div className="App">
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
