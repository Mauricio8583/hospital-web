import React from 'react'
import './especialidades.scss'

export const Especialidades = () => {
  return (
    <div className='specialitiesContainer'>
        <div className='mainTitle'>
         <h1>Especialidades</h1>  
        </div>
        <div className='mainTable'>
           <h2>Especialidades Médicas</h2>
            <ul>
                <li>Anestesiologia</li>
                <li>Cirurgia Geral</li>
                <li>Laparóscopia</li>
                <li>Cirurgia Plastica</li>
                <li>Cirurgia Vascular</li>
                <li>Clínica Médica</li>
                <li>Fonoaudiologia</li>
                <li>Gastroenterologia</li>
                <li>Ginecologia e Obstrecia</li>
                <li>Oftalmologia</li>
                <li>Otorrinolaringologia</li>
                <li>Pediatria</li>
                <li>Proctologia</li>
                <li>Pneumologia</li>
                <li>Traumatologia e Ortopedia</li>
                <li>Urologia</li>
            </ul>
        </div>              
    </div>
  )
}
