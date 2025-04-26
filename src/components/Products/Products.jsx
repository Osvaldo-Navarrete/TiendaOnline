import React, { useEffect } from 'react'
import Img1 from "../../assets/Products/Product1.png"
import Img2 from "../../assets/Products/Product2.png"
import Img3 from "../../assets/Products/Product3.png"
import Img4 from "../../assets/Products/Product4.png"
import Img5 from "../../assets/Products/Product5.png"
import { FaStar } from "react-icons/fa6"
import "aos/dist/aos.css";

const ProductsData = [
  { id: 1, img: Img1, title: "Titulo ropa 1", rating: 5.0, color: "Red", aosDelay: "0" },
  { id: 2, img: Img2, title: "Titulo ropa 2", rating: 3.9, color: "White", aosDelay: "200" },
  { id: 3, img: Img3, title: "Titulo ropa 3", rating: 4.2, color: "Brown", aosDelay: "400" },
  { id: 4, img: Img4, title: "Titulo ropa 4", rating: 4.6, color: "Blue", aosDelay: "500" },
  { id: 5, img: Img5, title: "Titulo ropa 5", rating: 3.7, color: "Orange", aosDelay: "600" },
];
const Products = () => {
  return (
    <div className='py-20 w-full overflow-x-hidden bg-amber-100 dark:bg-secundario'>
      <div className='overflow-x-hidden py-10' data-aos="zoom-in">
        {/*Sección de títulos------------*/}
        <div className='text-center pb-12 mx-auto w-full'>
          <h2 className='text-3xl font-bold'>Productos</h2>
          <h3 className='text-2xl text-amber-600 pt-5'>Top de productos vendidos</h3>
          <p className='text-sm text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/*Sección de imagenes---------- */}
        <div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-x-4 gap-y-6 px-4 ' data-aos="fade-up">

            {/*Card section----------------- */}
            {ProductsData.map((data) => (
              <div key={data.id} className='space-y-3 hover:scale-110 ease-in-out duration-200'>
                <img src={data.img} alt="" className='h-[200px] w-[150px] object-cover rounded-md max-w-full' />

                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600'>{data.color}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center pt-20'>
            <button className='shadow-lg shadow-black/60 border-blue-900 text-amber-50 bg-amber-600 border-1 rounded-full p-5   hover:scale-110 ease-in-out duration-200 cursor-pointer'>Ver Top productos</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products