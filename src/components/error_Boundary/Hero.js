import React from 'react'

const Hero = ({heroName}) => {
    if(heroName === 'Mario'){
        throw new Error('Não tem esse heroi!')
    }

  return (
    <div>
      {heroName}
    </div>
  )
}

export default Hero
