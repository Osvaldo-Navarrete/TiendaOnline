import React from 'react'
import Camiseta1 from '../../assets/TopProducts/camiseta1.png'
import Camiseta2 from '../../assets/TopProducts/camiseta2.png'
import Camiseta3 from '../../assets/TopProducts/camiseta3.png'
import { FaStar } from "react-icons/fa6"
import "aos/dist/aos.css";

const ProductsData = [
  { id: 1, img: Camiseta1, title: "Roja", description: "Una bonita camiseta roja" },
  { id: 2, img: Camiseta2, title: "Azul", description: "Una bonita camiseta azul" },
  { id: 3, img: Camiseta3, title: "Verde", description: "Una bonita camiseta verde" },
]


const TopProducts = () => {
  return (
    <div>
      <div className='bg-amber-400 dark:bg-gray-900 duration-200'>
        {/*Titulos---------------------*/}
        <div data-aos="zoom-in">
          <div className='text-center pb-12 mx-auto w-full pt-20'>
            <h2 className='text-3xl font-bold dark:text-secundario'>Top recomendaciones</h2>
            <h3 className='text-2xl text-amber-600 pt-5'>Accesorios y ropa</h3>
            <p className='text-sm text-gray-600 dark:text-secundario'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        {/*Cards de imagenes-----------*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center py-20'>
          {ProductsData.map((data) => (
            <div className='rounded-2xl  bg-amber-400 dark:bg-gray-900 hover:bg-amber-600 dark:hover:bg-primario/60 hover:text-white relative shadow-2xl duration-300 group max-w-[300px] mb-14' data-aos="flip-up">
              {/*Imagenes---------------*/}
              <div className='h-[180px]'>
                <img src={data.img} alt="" className='max-w-[250px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
              </div>
              {/*Detalles de producto-- */}
              <div className='p-4 text-center '>
                {/*Estrellas----------- */}
                <div className='w-full flex items-center justify-center gap-1'>
                  <FaStar className='text-white' />
                  <FaStar className='text-white' />
                  <FaStar className='text-white' />
                  <FaStar className='text-white' />
                  <FaStar className='text-white' />
                </div>
                <h1 className='text-xl font-bold dark:text-white'>{data.title}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 pb-5'>{data.description}</p>
                <button className='shadow-lg shadow-black/60 border-blue-900 text-blue-950 font-semibold bg-amber-200 border-1 rounded-full py-2 px-4 hover:scale-110 ease-in-out duration-200 cursor-pointer'>Ordenar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts