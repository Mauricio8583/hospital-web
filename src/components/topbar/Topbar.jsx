import React from 'react'
import './topbar.scss'
import { BrowserRouter as Router ,Link } from 'react-router-dom'

export const Topbar = () => {
  return (
    <div className='container'>
      <Router>
        <ul className='menuList'>
            <li className='menuListItem'><Link to="/hospital">O Hospital</Link></li>
            <li className='menuListItem'><Link to="/estrutura">Estrutura</Link></li>
            <li className='menuListItem'>Especialidades</li>
            <li className='menuListItem'>Convênios e Planos</li>
            <li className='menuListItemImg'><Link to="/"><img src='../../hospital.jpg' alt='' /></Link></li>
            <li className='menuListItem'>Laboratorio</li>
            <li className='menuListItem'>Localização</li>
            <li className='menuListItem'>Trabalhe Conosco</li>
            <li className='menuListItem'>Contato</li>
            <li className='menuListItem'>A Cidade</li>
        </ul>
      </Router>
    </div>
  )
}
