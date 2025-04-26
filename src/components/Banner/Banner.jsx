import React from 'react'
import Foto from '../../assets/Banner/Foto.png'
import { RiShieldStarLine } from "react-icons/ri";
import { GrSecure } from 'react-icons/gr';
import { GiStarsStack } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import "aos/dist/aos.css";

const Banner = () => {
    return (
        <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-amber-100 dark:bg-secundario'>
            <div className='container' data-aos='zoom-in'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    {/*Foto------------------------*/}
                    <div>
                        <img src={Foto} alt="" className='max-w-[400px] h-[350px] w-full
                        mx-auto object-cover rounded-4xl' />
                    </div>

                    {/*Sección de texto----------- */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0 px-10'>
                        <h1 className='text-3xl sm:text-4xl font-bold'>Descuentos de verano de hasta el 50%</h1>
                        <p className='text-sm text-gray-500 tracking-wide leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae molestiae delectus illum distinctio, dicta ullam fugiat laboriosam earum.</p>
                        <div className='flex items-center gap-4'>
                            <RiShieldStarLine className='dark:text-blue-950 text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-400 dark:bg-violet-100 text-white' />
                            <p>Productos de calidad</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <GrSecure className='dark:text-blue-950 text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-400 dark:bg-violet-100 text-white' />
                            <p>Compras seguras</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <GiStarsStack className='dark:text-blue-950 text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-400 dark:bg-violet-100 text-white' />
                            <p>Conjuntos en tendencia</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <GrStatusGood className='dark:text-blue-950 text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-400 dark:bg-violet-100 text-white' />
                            <p>Compra directa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner