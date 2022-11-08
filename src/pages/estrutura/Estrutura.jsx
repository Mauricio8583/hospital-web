import React from 'react'
import './estrutura.scss'

export const Estrutura = () => {
  return (
    <div className='structureContainer'>
        <div className='showImages'>
          <h1>Estrutura</h1>
          <ul>
            <li><img src='../../estrutura1.jpg' alt='estrutura' /><h2>Quartos</h2></li>
            <li><img src='../../estrutura2.jpg' alt='estrutura' /><h2>Cama</h2></li>
            <li><img src='../../estrutura3.jpg' alt='estrutura' /><h2>Ressonância</h2></li>
            <li><img src='../../estrutura4.jpg' alt='estrutura' /><h2>UTI</h2></li>
          </ul>
        </div>
    </div>
  )
}
