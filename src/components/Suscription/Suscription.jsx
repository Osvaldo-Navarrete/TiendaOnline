import React from 'react'
import "aos/dist/aos.css";

const Suscription = () => {
  return (
    <div className='flex justify-center items-center bg-orange-400 dark:bg-blue-950 duration-200 text-white font-semibold'>
        <div className='flex flex-col justify-center items-center py-20 gap-10' data-aos="fade-up">
            <h1 className='text-5xl px-10'>Suscribete a nuestras ofertas</h1>
            <input type="text" placeholder='Ingresa tu correo electrónico' className='w-[450px] p-4 bg-amber-100 text-blue-950 rounded-2xl focus:outline-none focus:border-1 focus:border-blue-950 shadow-2xl duration-200'/>
        </div>
    </div>
  )
}

export default Suscription