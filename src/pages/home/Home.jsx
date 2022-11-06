import { ArrowBack, ArrowForward } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { data } from '../../data'
import './home.scss'

export const Home = () => {

   const [currentSlider, setCurrentSlider] = useState(0);

   const handleSlider = (side) => {
    if(side === 'left') setCurrentSlider(currentSlider > 0 ? currentSlider-1: 7);

    if(side === 'right') setCurrentSlider(currentSlider < 7 ? currentSlider+1: 0);
   }

  return (
    <div className='staticsContainer'>
        <div className='slider' style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
         {data.map((data) => (
            <div className='itemsContainer'>            
            <div className='items' key={data.id}>
                <div className='left'>
                    <div className='leftContainer'>
                        <h2>{data.number}</h2>
                        <p>{data.desc}</p>
                    </div>
                </div>
                <div className='right'>
                <img src={data.img} alt='cirurgias' />
                </div>
            </div>
            </div>                  
          ))}
                
        </div>
        <div className='arrowLeft' onClick={() => handleSlider('left')}><ArrowBack /></div>
        <div className='arrowRight' onClick={() => handleSlider('right')}><ArrowForward /></div>
    </div>
  )
}
