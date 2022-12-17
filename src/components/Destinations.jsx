import React from 'react'
import Arma1 from '../assets/arma1.jpeg';
import Arma2 from '../assets/arma2.jpeg';
import Arma3 from '../assets/arma3.jpeg';
import Arma4 from '../assets/arma4.jpeg';
import Arma5 from '../assets/arma5.jpeg';



function Destinations() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>Pregunta por el mejor plan</h1>
        <p className='py-4'>En las Mejores Playas del Caribe</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4 '>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Arma1} alt="/" />
            <img className='w-full h-full object-cover' src={Arma2} alt="/" />
            <img className='w-full h-full object-cover' src={Arma3} alt="/" />
            <img className='w-full h-full object-cover' src={Arma4} alt="/" />
            <img className='w-full h-full object-cover' src={Arma5} alt="/" />
        </div>
    </div>
  )
}

export default Destinations