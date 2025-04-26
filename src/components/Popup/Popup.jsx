import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({ orderPopup, setOrderPopup }) => {
    return (
        <>
            {orderPopup && (
                <div className='fixed inset-0 z-50 flex items-center justify-center'>
                    {/* Fondo difuminado */}
                    <div
                        className='absolute inset-0 bg-black/50 backdrop-blur-sm'
                        onClick={() => setOrderPopup(false)}
                    />
                    {/* Contenido del popup */}
                    <div className='relative z-10 bg-white p-6 rounded-xl shadow-lg w-[300px] max-w-[90%]'>
                        <button
                            className='absolute top-2 right-2 text-2xl text-gray-600 hover:text-black'
                            onClick={() => setOrderPopup(false)}
                        >
                            <IoCloseOutline className='cursor-pointer'/>
                        </button>
                        <h2 className="text-lg font-semibold mb-4">Tu carrito: </h2>
                        <p>Aquí puedes ver los elementos que has agregado a tu carrito y luego proseguir con tu pago...</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
