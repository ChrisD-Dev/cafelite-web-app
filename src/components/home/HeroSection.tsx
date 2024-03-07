import Link from 'next/link'
import React from 'react'


const imageURL = "assets/main/img-hero.jpg"


export const HeroSection = () => {
    return (
        <div className='w-full max-w-[85rem] h-[550px] sm:h-[590px] xl:h-[650px]  px-6 md:px-12  mx-auto'>

            {/* ---- Hero Img ---- */}
            <div
                style={{
                    backgroundImage: `url(${imageURL})`,
                }}
                className="bg-cover bg-center w-full h-[470px] sm:h-[490px] xl:h-[520px] rounded-xl overflow-hidden sm:px-12 xl:px-16"
            >
                {/* ---- BG Opacity in Phone ---- */}
                <div className='h-full w-full bg-[#313131] bg-opacity-60 sm:hidden px-6 flex items-center justify-center'>

                    {/* ---- Text ---- */}
                    <div className=' text-center  '>
                        <h1
                            className='text-white text-opacity-90 text-4xl font-bold'>
                            Gran café hecho simple.</h1>
                        <p
                            className='text-white text-opacity-85 text-sm mt-8'
                        >Comienza tus mañanas con los mejores cafés del mundo. Prueba nuestros cafés artesanales expertamente seleccionados de nuestros mejores tostadores, entregados directamente a tu puerta.</p>
                        <button className='text-white font-bold bg-[#2a8784] px-10 py-4 rounded-md mt-8'>
                            <Link href={"/plan"}>
                                Crea tu plan
                            </Link>
                        </button>
                    </div>

                </div>

                {/* ---- Text ---- */}
                <div className=' w-[435px] h-[50%] hidden sm:block mt-20 xl:mt-28'>
                    <h1
                        className='text-white text-opacity-90 text-[48px] leading-[60px] xl:leading-[50px] font-bold'>
                        Gran café hecho simple.</h1>
                    <p
                        className='text-white text-opacity-75 text-base mt-5 leading-relaxed'
                    >Comienza tus mañanas con los mejores cafés del mundo. Prueba nuestros cafés artesanales expertamente seleccionados de nuestros mejores tostadores, entregados directamente a tu puerta.</p>
                    <Link href={"/plan"}>
                        <button className='btnCustom'>
                            Crea tu plan
                        </button>
                    </Link>
                </div>


            </div>
        </div >
    )
}

