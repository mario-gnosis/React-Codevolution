import React from 'react';
import './myStyle.css';

function Stylesheet(props) {
    let  className = props.primary ? 'primary' : 'verm'
  return (
    <div className="App">
        <h2 className="efeito">Adicionando cor com base a decisão </h2>
        <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
