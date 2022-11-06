import React from 'react'
import './footer.scss'
import {Phone} from '@material-ui/icons'

export const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='items'>
        <div className='card'>
          <h2>Marcação de Consultas e Exames</h2>
          <span className='time'>De Segunda a Sexta das 8h as 18h</span>
        </div>
        <div className='card'>
          <h2>Consultas - Centro Clinico(Telefones)</h2>
          <ul className='phonesList'>
            <li><Phone className='phoneIcon' />051 3651 2129</li>
            <li><Phone className='phoneIcon' />051 99591 1621</li>
            <li><Phone className='phoneIcon' />051 99591 1474</li>
          </ul>
        </div>
        <div className='card'>
          <h2>Exames</h2>
          <table className='phonesTable'>
            <tr>
              <td className='longName'>Raio X e Mamografia</td>
              <td><Phone className='phoneIcon' />051 3651 4887</td>
            </tr>
            <tr>
              <td>Ecografia</td>
              <td><Phone className='phoneIcon' />051 3651 1580</td>
            </tr>
            <tr>
              <td>Laboratório</td>
              <td><Phone className='phoneIcon' />051 3651 8500</td>
            </tr>
          </table>
        </div>
        <div className='card'>
          <h2>SAC</h2>
          <span><Phone className='phoneIcon' />051 3651 8500</span>
        </div>
        <div className='card'>
          <h2>Endereço e Telefones do Hospital</h2>
          <span>Rua Rio Branco - nº 1008 - Bairro Bela Vista - CEP: 96700-000 - São Jerônimo RS</span>
          <ul className='phonesList'>
            <li><Phone className='phoneIcon' />051 3651 8500</li>
            <li><Phone className='phoneIcon' />051 3651 1941</li>
            <li><Phone className='phoneIcon' />051 3651 5446</li>
            <li><Phone className='phoneIcon' />051 3651 1319</li>
          </ul>
        </div>
     </div>      
    </div>
  )
}
