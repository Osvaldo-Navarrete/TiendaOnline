import React from 'react'
import Image1 from "../../assets/Hero/Image1.png";
import Image2 from "../../assets/Hero/Image2.png";
import Image3 from "../../assets/Hero/Image3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

{/*Array con imagenes, titulos, descripciones*/}
const ImageList = [
  { id: 1, img: Image1, title: "Disfruta de un verano fresco", description: "Con la nueva colección de conjuntos con colores y diseños exclusivos" },
  { id: 2, img: Image2, title: "Tendencias para caballeros", description: "Accesorios, prendas, conjuntos y calzado exclusivo" },
  { id: 3, img: Image3, title: "Siéntete a la moda", description: "¡Trajes de baño, prendas, accesorios, conjuntos y diseños para lucir increíble!" },
];

{/*Customización de flechas del slide*/}
const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-white rounded-full shadow-md p-2 hover:bg-gray-200 transition overflow-x-hidden"
    onClick={onClick}
  >
    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
);
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-white rounded-full shadow-md p-2 hover:bg-gray-200 transition overflow-x-hidden"
    onClick={onClick}
  >
    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);


const Hero = () => {

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };


  return (
    <div className='top-16 relative min-h-[550px] sm:min-h-[650px] bg-amber-100 flex justify-center items-center dark:bg-gray-900 dark:text-secundario duration-200 overflow-x-hidden'>

      {/*Hero Section----------------------*/}
      <div className='w-full px-4 sm:px-10 pb-8 sm:pb-0'  data-aos="zoom-in">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="w-full flex justify-center sm:px-20 lg:px-60" >
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* Sección de texto */}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-12'>
                  <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-950 dark:text-secundario'>{data.title}</h2>
                  <p className='text-xl text-blue-950 dark:text-secundario'>{data.description}</p>
                  <div>
                    <button className='bg-gradient-to-r from-quintario to-primario hover:scale-105 duration-200 text-blue-900 font-semibold py-2 px-4 rounded-full shadow-lg shadow-quintario/50 border-blue-900 border-1 cursor-pointer'>
                      ¡Ordena ahora!
                    </button>
                  </div>
                </div>
                {/* Sección de imagen */}
                <div className='order-1 sm:order-2'>
                  <div className='relative z-12 justify-center flex items-center'>
                    <img src={data.img} alt={data.title} className='w-[300px] h-[500px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-100 object-contain mx-auto' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero