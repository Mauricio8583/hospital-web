import React from 'react'
import './localizacao.scss'

export const Localizacao = () => {
  return (
    <div className='localContainer'>
        <div className='local'>
            <div className='localTitle'>
                <h1>Localização</h1>
            </div>
            <div className='localAddress'>
                <span>
                O Hospital está localizado na Rua Rio Branco, nº 1008, Bairro Bela Vista, CEP: 96700-000,
                 no centro da cidade de São Jerônimo, a 68 km de Porto Alegre.
                </span>
            </div>
            <div className='localLink'>
                <a href='https://www.google.com.br/maps/place/Av.+Rio+Branco,+1008+-+Bela+Vista,+S%C3%A3o+Jer%C3%B4nimo+-+RS,+96700-000/@-29.9593707,-51.7186223,771m/data=!3m2!1e3!4b1!4m5!3m4!1s0x951bbfb0ca177149:0x2eaa36f3c2b11228!8m2!3d-29.9593707!4d-51.7164336?hl=pt-BR'>Veja a localização no Google Maps</a>
            </div>
            <div className='localGoogleMaps'>
                <img src='../../googleMaps.jpg' alt='Google Maps' />
            </div>
        </div>        
    </div>
  )
}
