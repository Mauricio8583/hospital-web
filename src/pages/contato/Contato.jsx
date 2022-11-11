import React from 'react'
import './contato.scss'

export const Contato = () => {

   const handleSubmit = (e) => {
     e.preventDefault()
   }

  return (
    <div className='contactContainer'>
        <div className='contactFormContainer'>
            <div className='formTitle'>
              <h1>Contato</h1>
            </div>
            <form onSubmit={(e) => handleSubmit(e.target)}>
                <label>Nome</label>
                <input type="text" />
                <label>Telefone</label>
                <input type="text" />
                <label>E-mail</label>
                <input type="text" />
                <label>Mensagem</label>
                <textarea></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>                
    </div>
  )
}
