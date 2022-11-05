import React from 'react'
import './topbar.scss'

export const Topbar = () => {
  return (
    <div className='container'>
        <ul className='menuList'>
            <li className='menuListItem'>O Hospital</li>
            <li className='menuListItem'>Estrutura</li>
            <li className='menuListItem'>Especialidades</li>
            <li className='menuListItem'>Convênios e Planos</li>
            <li className='menuListItemImg'><img src='../../hospital.jpg' alt='' /></li>
            <li className='menuListItem'>Laboratorio</li>
            <li className='menuListItem'>Localização</li>
            <li className='menuListItem'>Trabalhe Conosco</li>
            <li className='menuListItem'>Contato</li>
        </ul>
    </div>
  )
}
