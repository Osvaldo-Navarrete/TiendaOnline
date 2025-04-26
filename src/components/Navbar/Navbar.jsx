import React, { useState } from 'react';
import { HiOutlineSearch, HiOutlineMenu, HiX } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import { FaBagShopping, FaCaretDown } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
    { id: 1, name: "Inicio", link: "/#" },
    { id: 2, name: "Tienda", link: "/#" },
    { id: 3, name: "Ofertas", link: "/#" },
    { id: 4, name: "Contacto", link: "/#" },
    { id: 5, name: "Sobre nosotros", link: "/#" },
];

const DropdownLinks = [
    { id: 1, name: "Hombres", link: "/#" },
    { id: 2, name: "Mujeres", link: "/#" },
    { id: 3, name: "Niños", link: "/#" },
    { id: 4, name: "Accesorios", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className='shadow-md bg-terciario dark:bg-gray-900 text-white w-full fixed z-100'>
            <div className="py-4">
                <div className='max-w-7xl mx-auto flex justify-between items-center px-5'>
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <a href="#" alt="Logo" className="flex items-center gap-2">
                            <FaBagShopping className="text-quintario text-2xl" />
                            <span className="text-2xl font-bold">Shopp-ing</span>
                        </a>
                    </div>

                    {/* Icono menú hamburguesa */}
                    <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <HiX /> : <HiOutlineMenu />}
                    </div>

                    {/* Búsqueda y carrito en desktop */}
                    <div className='hidden sm:flex justify-between items-center gap-4'>
                        <div className='group relative hidden sm:block'>
                            <input
                                type="text"
                                placeholder='Haz una búsqueda...'
                                className='bg-white text-black w-[200px] group-hover:w-[240px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-quintario hover:bg-amber-200'
                            />
                            <HiOutlineSearch className='text-gray-400 group-hover:text-black absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>
                        <button
                            onClick={handleOrderPopup}
                            className='bg-gradient-to-r from-quintario to-primario transition-all duration-300 hover:scale-105 rounded-full py-1 px-4 flex items-center gap-2 text-blue-900 group cursor-pointer drop-shadow-sm'
                        >
                            <TiShoppingCart className='text-2xl duration-300' />
                            <span className='group-hover:block hidden transition-all duration-300 ease-in-out'>Carrito</span>
                        </button>
                        <DarkMode />
                    </div>
                </div>
            </div>

            {/* Menú para pantallas grandes */}
            <div className='justify-center bg-primario dark:bg-secundario hidden lg:flex'>
                <ul className='flex items-center gap-4 py-2'>
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <a
                                href={data.link}
                                className='inline-block py-1 px-4 text-blue-950 hover:text-quintario duration-200'>
                                {data.name}
                            </a>
                        </li>
                    ))}
                    <li className='group relative'>
                        <a href="#" className='flex items-center gap-1 text-blue-950 hover:text-quintario'>
                            Moda
                            <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                        </a>
                        <div className='absolute z-10 hidden group-hover:block bg-white text-blue-950 rounded-md shadow-lg w-[150px] p-2'>
                            <ul>
                                {DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className='inline-block w-full rounded-md p-2 hover:bg-quintario/20 hover:text-blue-600'>
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Menú responsive desplegable */}
            {menuOpen && (
                <div className='bg-primario dark:bg-secundario px-5 py-4 lg:hidden'>
                    {/* Contenedor para barra de búsqueda, carrito y modo oscuro en fila */}
                    <div className='flex items-center gap-4 mb-4'>
                        {/* Búsqueda */}
                        <div className='relative flex-1'>
                            <input
                                type="text"
                                placeholder='Haz una búsqueda...'
                                className='bg-white text-black w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-quintario hover:bg-amber-200'
                            />
                            <HiOutlineSearch className='text-gray-400 absolute top-1/2 right-4 transform -translate-y-1/2' />
                        </div>

                        {/* Botón carrito */}
                        <button
                            onClick={handleOrderPopup}
                            className='bg-gradient-to-r from-quintario to-primario text-blue-900 rounded-full py-2 px-4 flex items-center justify-center gap-2 drop-shadow-sm'
                        >
                            <TiShoppingCart className='text-2xl' />
                            <span>Carrito</span>
                        </button>

                        {/* Modo oscuro */}
                        <DarkMode />
                    </div>

                    {/* Links */}
                    <ul className='flex flex-col gap-3 items-center'>
                        {Menu.map((data) => (
                            <li key={data.id}>
                                <a
                                    href={data.link}
                                    className='block py-2 px-4 text-blue-950 hover:bg-white/20 rounded-md hover:text-quintario duration-200'>
                                    {data.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className='flex items-center justify-between w-full py-2 px-4 text-blue-950 hover:bg-white/20 rounded-md'
                            >
                                Moda
                                <FaCaretDown className={`${dropdownOpen ? "rotate-180" : ""} transition-transform`} />
                            </button>
                            {dropdownOpen && (
                                <ul className='pl-4 mt-2 space-y-1'>
                                    {DropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a
                                                href={data.link}
                                                className='block py-1 px-2 text-sm text-blue-800 hover:text-quintario'>
                                                {data.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
