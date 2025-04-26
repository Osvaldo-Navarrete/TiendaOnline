import React from 'react'
import { FaBagShopping } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaTiktok, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import "aos/dist/aos.css";

const FooterLinks = [
    {
        title: "Inicio",
        link: "/#",
    },
    {
        title: "Acerca de",
        link: "/#about",
    },
    {
        title: "Contacta con nosotros",
        link: "/#contact",
    },
    {
        title: "Blog de noticias ",
        link: "/#blog",
    },
]

const Footer = () => {
    return (
        <div className='text-blue-950 bg-amber-200 pb-10 dark:bg-gray-900 dark:text-secundario'>
            <div className='container  mx-auto px-4' data-aos="fade-down">
                <div className='grid md:grid-cols-3 pv-44 pt-5'>
                    {/* Detalles del sitio------------------------- */}
                    <div className='py-8 px-4'>
                        <div className='flex items-center gap-2 py-5 text-4xl'>
                            <FaBagShopping className="text-quintario" />
                            <h1 className=' font-bold'>Shopp-ing</h1>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae impedit eos ipsam ducimus, iusto quibusdam dolore animi.</p>
                    </div>

                    {/* Footer Links----------------------------------- */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 '>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Enlaces</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((link) => (
                                            <li className='cursor-pointer hover:text-quintario hover:translate-x-1 duration-300  text-blue-950 dark:text-secundario' key={link.title}>
                                                <span>{link.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Conoce más...</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((link) => (
                                            <li className='cursor-pointer hover:text-quintario hover:translate-x-1 duration-300  text-blue-950 dark:text-secundario' key={link.title}>
                                                <span>{link.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        {/* Redes sociales------------- */}
                        <div className='pb-10'>
                            <div className='flex gap-3 text-3xl items-center py-10 px-5'>
                               <a href=""><FaFacebook /></a>
                                <a href=""><FaTiktok /></a>
                                <a href=""><FaInstagram /></a>
                            </div>
                            <div className=''>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow />
                                    <p>Cd. de México, México</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FaMobileAlt />
                                    <p>+21 66 9821 9821</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer