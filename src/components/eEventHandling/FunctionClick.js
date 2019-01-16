import React from 'react'

function FunctionClick() {
    
    function clickHandler (){
        console.log("Button clicked")
    }
    //Se colocar assim onClick={clickHandler()}, o botão já vem clicado, pois esse é um erro comum entre os iniciantes
  return (
    <div className="App">
        <h4>Exemplo de click com Function </h4>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
