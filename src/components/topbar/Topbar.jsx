import React from 'react'
import './topbar.scss'
import { BrowserRouter as Router ,Link } from 'react-router-dom'

export const Topbar = () => {
  return (
    <div className='container'>
      <Router>
        <ul className='menuList'>
            <li className='menuListItem'><Link to="/hospital">O Hospital</Link></li>
            <li className='menuListItem'><Link to="/cidade">A Cidade</Link></li>
            <li className='menuListItem'><Link to="/estrutura">Estrutura</Link></li>
            <li className='menuListItem'><Link to="/especialidades">Especialidades</Link></li>
            <li className='menuListItemImg'><Link to="/"><img src='../../hospital.jpg' alt='' /></Link></li>
            <li className='menuListItem'><Link to="/convenios">Convênios e Planos</Link></li>
            <li className='menuListItem'><Link to="/laboratorio">Laboratorio</Link></li>
            <li className='menuListItem'><Link to="/localizacao">Localização</Link></li>
            <li className='menuListItem'><Link to="/contato">Contato</Link></li>            
        </ul>
      </Router>
    </div>
  )
}
