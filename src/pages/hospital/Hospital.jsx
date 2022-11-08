import React from 'react'
import './hospital.scss'

export const Hospital = () => {
  return (
    <div className='hospitalContainer'>
        <div className='mainText'>
            <h1>O Hospital de Caridade de São Jerônimo</h1>

            <p>Com a necessidade de atender os doentes da cidade de São Jerônimo e região Carbonífera, surgiu em 1947, 
                a ideia de construir um Hospital. Porém, a construção só foi possível com a ajuda da comunidade local,
                 organizada por empresários que faziam parte da diretoria da sociedade hospitalar. Em 30 de setembro de 1952, 
                 foi inaugurado o hospital, e após seis meses de funcionamento, passou a ser administrado pela Sociedade Educação
                  e Caridade. O Hospital foi entregue oficialmente a Congregação em 1964, sendo transformado em uma entidade filantrópica
             e privada.</p>
             <p>Durante todos os anos em que as Irmãs estiveram á frente da Instituição, importantes mudanças ocorreram, 
                levando o Hospital a ser referência em toda a Região Carbonífera. Já no dia 15 de dezembro de 2009, 
                o Hospital foi transferido para uma nova entidade Mantenedora,
                 a AFPERGS – Associação dos Funcionários Públicos do Estado do Rio Grande do Sul -
              marcando assim uma nova fase de modernização.</p>
              <div className='extraInfo'>
            <h2>Informações Gerais</h2>
            <ul>
                <li className='textLine'>Adiquirido pela AFPERGS em 2009</li>
                <li className='textLine'>Histórico de 58 anos (Referência na região carbonífera)</li>
                <li className='textLine'>Emergência e urgência 24h em pediatria, obstetrícia e atendimento clínico</li>
                <li className='textLine'>4000 atendimentos no pronto socorro</li>
                <li className='textLine'>13 especilidades médicas</li>
            </ul>

            <h2 className='secondList'>Hospital de Caridade de São Jerônimo em Números</h2>
            <ul>
                <li className='textLine'>96 leitos</li>
                <li className='textLine'>372 colaboradores</li>
                <li className='textLine'>76 médicos</li>
                <li className='textLine'>375 internações/mês SUS</li>
                <li className='textLine'>4.150 atendimentos ambulatóriais/mês SUS</li>
                <li className='textLine'>215 cirurgias/mês</li>
                <li className='textLine'>2.832 cirurgias via SUS em um ano</li>
                <li className='textLine'>7.233 atendimentos/mês em serviços de diagnóstico e tratamento</li>
            </ul>
        </div>
        </div>
        <div className='hospitalImg'>
            <img src='../../hospital_entrada.jpg' alt='Entrada do Hospital de São Jerônimo' />            
        </div>                
    </div>
  )
}
