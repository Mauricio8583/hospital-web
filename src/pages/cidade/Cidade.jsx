import React from 'react'
import './cidade.scss'

export const Cidade = () => {
  return (
    <div className='cityContainer'>
        <div className='left'>
            <div className='imgContainer'>
                <img src='../../sao_jeronimo1.jpg' alt='São Jerônimo Igreja Matriz' />
                <img src='../../sao_jeronimo2.jpg' alt='São Jerônimo Praça' />
            </div>
        </div>
        <div className='right'>
            <div className='mainText'>
                <div className='textTitle'>
                    <h1>Cidade do Minério e da Pecuária</h1>
                </div>
                <div className='textContent'>
                    <p>
                    As atividades pecuária e mineradora foram o berço da riqueza de São Jerônimo. Às margens do Rio Jacuí surgiram as charqueadas, que processavam a carne dos gados abatidos nos campos do município. Aliada a prosperidade das estâncias, a exploração das jazidas de carvão mineral contribuiu para o desenvolvimento da cidade.
                   Originária de Triunfo, São Jerônimo foi elevada à categoria de município em 30 de setembro de 1861. Nesta data comemora-se o aniversário do município e, também, o dia de São Jerônimo, santo conhecido como tradutor da Bíblia do Grego e Hebraico para o Latim. Porém, a emancipação definitiva de São Jerônimo aconteceu em 02 de março de 1938, após atingir um grande desenvolvimento econômico.
                   A população de São Jerônimo é predominantemente de origem luso-brasileira, o que pode ser visto ainda hoje no centro da cidade e nos casarios de estilo açoriano-colonial, um verdadeiro patrimônio histórico da cidade.
                    </p>
                </div>

            </div>
            <div className='extraData'>
                <div className='extraDataTitle'>
                    <h2>Dados Gerais</h2>
                </div>
                <div className='dataTable'>
                    <table border="1">
                        <tr>
                            <td className='dataName'>População</td>
                            <td className='dataContent'>20.283 habitantes de acordo com o Censo Demográfico do IBGE (2000)</td>
                        </tr>
                        <tr>
                            <td className='dataName'>Área</td>
                            <td className='dataContent'>937 km²</td>
                        </tr>
                        <tr>
                            <td className='dataName'>Indice de Desenvolvimento Humano (IDH)</td>
                            <td className='dataContent'>0.79 (Escala de 0 a 1)</td>
                        </tr>
                        <tr>
                            <td className='dataName'>Distritos</td>
                            <td className='dataContent'>Morrinhos, Quitéria e Gramal</td>
                        </tr>
                        
                    </table>                    
                </div>
                <div className='cityWebSite'>
                    <a href='https://saojeronimo.rs.gov.br/'>Site da Prefeitura de São Jerônimo</a>
                </div>
            </div>
        </div>        
    </div>
  )
}
