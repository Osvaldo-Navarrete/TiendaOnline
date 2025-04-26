import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/Reviews/perfil1.png"
import Image2 from "../../assets/Reviews/perfil2.png"
import Image3 from "../../assets/Reviews/perfil3.png"
import Image4 from "../../assets/Reviews/perfil4.png"
import "aos/dist/aos.css";

const ReviewsData = [
    { id: 1, name: "Juanita", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: Image1, },
    { id: 2, name: "Salvador", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: Image2, },
    { id: 3, name: "Rebeca", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: Image3, },
    { id: 4, name: "Guillermo", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: Image4, },

];

const Reviews = () => {

    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }

    return (
        <div className='py-20 bg-amber-100'>
            <div className='container mx-auto px-4'>
                {/*Header section-------------------*/}
                <div className='text-center pb-12 mx-auto'>
                    <h2 className='text-3xl font-bold'>Reseñas de nuestros clientes</h2>
                    <h3 className='text-2xl text-amber-600 pt-5'>Top de reseñas</h3>
                    <p className='text-sm text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                {/* Reseñas de clientes */}
                <div className='pb-10' data-aos="fade-down">
                    <Slider {...settings}>{
                        ReviewsData.map((data) => (
                            <div className='my-6' key={data.id}>
                                <div
                                    className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primario relative '>
                                    <div className='mb-4'>
                                        <img src={data.img} alt="" className='rounded-full w-20 h-20' />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className=' text-gray-500 dark:text-secundario/50'>{data.text}</p>
                                            <h1 className='text-xl font-bold text-black/80 dark:text-secundario'>~ {data.name}</h1>
                                        </div>
                                    </div>
                                    <p className='text-black/20 text-9xl font-serif absolute top-5 right-5 dark:text-secundario'>“”</p>
                                </div>
                            </div>
                        ))
                    }</Slider>
                </div>
            </div>
        </div>
    )
}

export default Reviews