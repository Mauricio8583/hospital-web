import React from 'react'
import './laboratorio.scss'

export const Laboratorio = () => {
  return (
    <div className='labContainer'>
        <div className='left'>
            <div className='imgContainer'>
            <img src='../../laboratorio.png' alt='laboratorio' />
            </div>
        </div>
        <div className='right'>
            <div className='sectionTitle'>
                <h1>Laboratório de Analises Clinicas</h1>
            </div>
            <div className='firstParagraph'>
                <p>
                O Laboratório de Análises Clínicas do Hospital de Caridade São Jerônimo possui o que
                 há de mais moderno no seguimento de diagnóstios laboratoriais no atendimento ambulatorial hospital,
                  voltados à rede pública e privada
                </p>
            </div>
            <div className='secondParagraph'>
                <p>
                Nossa equipe conta com profissionais técnicos especializados e preparados para proporcionar aos clientes 
                um atendimento diferenciado, ágil e de qualidade.
                </p>
            </div>
            <div className='finalPart'>
                <div className='finalPartTitle'>
                  <h2>Excelência em Qualidade de Análises Clinicas</h2>
                </div>
                <div className='labExames'>
                    <ul>
                        <li>Análises Horminais</li>
                        <li>Biologia Molecular</li>
                        <li>Exames de DNA</li>
                        <li>Testes do Pezinho</li>
                        <li>Gasometria</li>
                        <li>Exames Tóxicologicos*</li>
                    </ul>
                </div>
                <div className='availableTime'>
                    <span>O Ùnico Laboratório da Região Carbonífera que funciona 24h. Atendemos emergências</span>
                </div>
                <div className='observation'>
                    <span>* Obrigatório para renovação de CNH C, D e E e exames ocupacionais</span>
                </div>
            </div>
        </div>               
    </div>
  )
}
