import React from 'react'
import Person from './Person';

function NameList() {
    /*
    const names = ['Bruce', 'Clarck', 'Diana']
    const nameList = names.map( name => <h2>{name}</h2>)
    */
   const names = ['Bruce', 'Clarck', 'Diana', 'Bruce']

    const persons = [
        {
        id: 1,
        name: 'Bruce',
        age: 30,
        skill: 'React'
    },
    {
        id: 2,
        name: 'Clarck',
        age: 25,
        skill: 'Angular'
    },
    {
        id: 3,
        name: 'Diana',
        age: 28,
        skill: 'Ionic'
    }
    ]
    // A Key é colocada para não dar erro de chave
    const nameList = names.map((name, index) => <h2 key={index}> {index} - {name}</h2> )
    const personList = persons.map(person => <Person key={person.id} person={person}/> )

  return (
    <div className="App">
        <h1>Lista com nomes iguais</h1>
        {nameList}
        <h1>Lista com MAP</h1>
         {personList}    
    </div>
  )


}

export default NameList
