import React from 'react'
import './estrutura.scss'

export const Estrutura = () => {
  return (
    <div className='structureContainer'>
        <div className='showImages'>
          <h1>Estrutura</h1>
          <ul>
            <li><img src='../../estrutura1.jpg' alt='estrutura' /></li>
            <li><img src='../../estrutura2.jpg' alt='estrutura' /></li>
            <li><img src='../../estrutura3.jpg' alt='estrutura' /></li>
            <li><img src='../../estrutura4.jpg' alt='estrutura' /></li>
          </ul>
        </div>
    </div>
  )
}
