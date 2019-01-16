import React from 'react';
 /*
function Greet (){
    return <h1>Olá pessoal!</h1>
}
*/

//export const Greet = () => <h1>Olá pessoal, que tal agora!</h1>

const Greet = props =>{
    const {name, heroName} = props
    return (
        <div className="App">
            <h1>Olá {name} a.k.a {heroName}, que tal agora!</h1>
            {props.children}
        </div>
      
    ) 
}

export default Greet