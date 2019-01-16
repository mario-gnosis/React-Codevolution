import React from 'react';

const Hello = () => {
/*
    return (
        <div>
        <h2>Hello World</h2>
        </div>
    )
    */
    // Este procedimento {id: 'hello', className: 'mario'} fica oculto no navegador é usado para adicionar css e etc.
    return React.createElement('div', {id: 'hello', className: 'mario'}, 
    React.createElement('h1', null, 'E você, como está?'))
}

export default Hello