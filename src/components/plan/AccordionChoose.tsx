"use client"

import { ChangeEvent, useState } from "react"
import { ModalCheckout } from "./ModalCheckout"

const texts = {
    1: {
        title: "Cómo tomas tu café?",
        card1: {
            title: "Capsula",
            description: "Compatible con sistemas Nespresso y similares"
        },
        card2: {
            title: "Filtro",
            description: "Para métodos de goteo como Aeropress, Chemex y V60."
        },
        card3: {
            title: "Expresso",
            description: "Granos densos y finamente molidos para una experiencia intensa y llena de sabor."
        },
    },
    2: {
        title: "Qué tipo de café quieres?",
        card1: {
            title: "Origen Único",
            description: "Café distinto y de alta calidad de una finca familiar específica."
        },
        card2: {
            title: "Descafeinado",
            description: "Exactamente como el café regular, excepto que la cafeína ha sido eliminada."
        },
        card3: {
            title: "Mezcla",
            description: "Combinación de dos o tres granos tostados oscuros de cafés orgánicos."
        },
    },
    3: {
        title: "Cuánto café quieres?",
        card1: {
            title: "250g",
            description: "Perfecto para el bebedor solitario. Produce alrededor de 12 deliciosas tazas."
        },
        card2: {
            title: "500g",
            description: "Opción perfecta para una pareja. Rinde aproximadamente 40 tazas deliciosas."
        },
        card3: {
            title: "1000g",
            description: "Perfecto para oficinas y eventos. Rinde aproximadamente 90 tazas deliciosas."
        },
    },
    4: {
        title: "Cada cuánto quiere el envío",
        card1: {
            title: "Every week",
            description: "$7.20 por envío. Incluye envío de primera clase gratuito."
        },
        card2: {
            title: "Every 2 weeks",
            description: "$9.60 por envío. Incluye envío prioritario gratuito."
        },
        card3: {
            title: "Every month",
            description: "$12.00 por envío. Incluye envío prioritario gratuito."
        },
    }
}

export const AccordionChoose = () => {

    // ----Capsula | Filtro | Expresso ----
    const [formato, setFormato] = useState<string | null>(null)
    // ---- Single | Decaf | Blended ----
    const [type, setType] = useState<string | null>(null)
    // ---- 250 | 500 | 1000 ----
    const [cantidad, setCantidad] = useState<string | null>(null)
    // ---- week | 2 weeks| month-----
    const [tiempo, setTiempo] = useState<string | null>(null)


    const onHandleChangeFormato = (e: ChangeEvent<HTMLInputElement>) => {
        setFormato(e.target.value)
    }

    const onHandleChangeType = (e: ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value)
    }

    const onHandleChangeCantidad = (e: ChangeEvent<HTMLInputElement>) => {
        setCantidad(e.target.value)
    }

    const onHandleChangeTiempo = (e: ChangeEvent<HTMLInputElement>) => {
        setTiempo(e.target.value)
    }



    return (
        <div className="mt-16">
            <div className="hs-accordion-group" data-hs-accordion-always-open>

                {/* ---- Acordeon #1 ----- */}
                <div className="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">

                        {/* ---- Titulo ---- */}
                        <span className="text-[24px] font-bold text-black text-opacity-50 xl:text-[32px] hover:text-[#2a8784]">{texts[1].title}</span>

                        <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                    </button>

                    {/* ---- Contenido Acordeon ---- */}
                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">

                        {/* ---- Tarjetas ---- */}
                        <div className="md:flex md:gap-x-5 xl:px-10 py-5">
                            <div className={`w-full md:flex-1 h-28 md:h-44 lg:h-52  overflow-hidden px-5 rounded-lg transition-colors duration-300 relative ${(formato === "Capsula" ? 'bg-[#2a8784]' : 'bg-[#f4f1eb]')}`}>
                                <input type="radio" name="type" id="Capsula" value="Capsula" className="absolute opacity-0 w-full h-full" onChange={onHandleChangeFormato} />
                                <label htmlFor="Capsula" className="absolute top-0 left-0 w-full h-full cursor-pointer"></label>
                                <div className={`${(formato === "Capsula" && 'text-white')} mt-5 md:mt-7`}>
                                    <h2 className="text-[20px]  font-bold">{texts[1].card1.title}</h2>
                                    <p className="font-light">{texts[1].card1.description}</p>
                                </div>
                            </div>
                            <div className={`w-full md:flex-1 h-28 md:h-44 lg:h-52  overflow-hidden   px-5 rounded-lg transition-colors duration-300  relative ${(formato === "Filtro" ? 'bg-[#2a8784]' : 'bg-[#f4f1eb]')} mt-5 md:mt-0`}>
                                <input type="radio" name="type" id="Filtro" value="Filtro" className="absolute opacity-0 w-full h-full" onChange={onHandleChangeFormato} />
                                <label htmlFor="Filtro" className="absolute top-0 left-0 w-full h-full cursor-pointer"></label>
                                <div className={`${(formato === "Filtro" && 'text-white')} mt-5 md:mt-7`}>
                                    <h2 className="text-[20px]  font-bold">{texts[1].card2.title}</h2>
                                    <p className="font-light">{texts[1].card2.description}</p>
                                </div>
                            </div>
                            <div className={`w-full md:flex-1 h-28 md:h-44 lg:h-52  overflow-hidden   px-5 rounded-lg transition-colors duration-300  relative ${(formato === "Expresso" ? 'bg-[#2a8784]' : 'bg-[#f4f1eb]')} mt-5 md:mt-0`}>
                                <input type="radio" name="type" id="Expresso" value="Expresso" className="absolute opacity-0 w-full h-full" onChange={onHandleChangeFormato} />
                                <label htmlFor="Expresso" className="absolute top-0 left-0 w-full h-full cursor-pointer"></label>
                                <div className={`${(formato === "Expresso" && 'text-white')} mt-5 md:mt-7`}>
                                    <h2 className="text-[20px]  font-bold">{texts[1].card3.title}</h2>
                                    <p className="font-light">{texts[1].card3.description}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ---- Acordeon #2 ----- */}
                <div className="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">

                        {/* ---- Titulo ---- */}
                        <span className="text-[24px] font-bold text-black text-opacity-50 xl:text-[32px] hover:text-[#2a8784]">{texts[2].title}</span>

                        <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                    </button>

                    {/* ---- Contenido Acordeon ---- */}
                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">

                        {/* ---- Tarjetas ---- */}
                        <div className="md:flex md:gap-x-5 xl:px-10 py-5">
                            <div className={`w-full md:flex-1 h-28 md:h-44 lg:h-52  overflow-hidden px-5 rounded-lg transition-colors duration-300 relative ${(type === "Single" ? 'bg-[#2a8784]' : 'bg-[#f4f1eb]')}`}>
                                <input type="radio" name="type" id="Single" value="Single" className="absolute opacity-0 w-full h-full" onChange={onHandleChangeType} />
                                <label htmlFor="Single" className="absolute top-0 left-0 w-full h-full cursor-pointer"></label>
                                <div className={`${(type === "Single" && 'text-white')} mt-5 md:mt-7`}>
                                    <h2 className="text-[20px] font-bold">{texts[2].card1.title}</h2>
                                    <p className="font-light">{texts[2].card1.description}</p>
                                </div>
                            </div>
                            <div className={`w-full md:flex-1 h-28 md:h-44 lg:h-52  overflow-hidden px-5 rounded-lg transition-colors duration-300  relative ${(type === "Decaf" ? 'bg-[#2a8784]' : 'bg-[#f4f1eb]')} mt-5 md:mt-0`}>
                                <input type="radio" name="type" id="Decaf" value="Decaf" className="absolute opacity-0 w-full h-full" onChange={onHandleChangeType} />
                                <label htmlFor="Decaf" className="absolute top-0 left-0 w-full h-full cursor-pointer"></label>
                                <div className={`${(type === "Decaf" && 'text-white')} mt-5 md:mt-7`}>
                                    <h2 className="text-[20px] font-bold">{texts[2].card2.title}</h2>
                                    <p className="font-light">{texts[2].card2.description}</p>
                                </div>
                            </div>
                            <div className={`w-full md:flex-1 h-28 md:h-44 lg:h-52  overflow-hidden px-5 rounded-lg transition-colors duration-300  relative ${(type === "Blended" ? 'bg-[#2a8784]' : 'bg-[#f4f1eb]')} mt-5 md:mt-0`}>
                                <input type="radio" name="type" id="Blended" value="Blended" className="absolute opacity-0 w-full h-full" onChange={onHandleChangeType} />
                                <label htmlFor="Blended" className="absolute top-0 left-0 w-full h-full cursor-pointer"></label>
                                <div className={`${(type === "Blended" && 'text-white')} mt-5 md:mt-7`}>
                                    <h2 className="text-[20px] font-bold">{texts[2].card3.title}</h2>
                                    <p className="font-light">{texts[2].card3.description}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ---- Acordeon #3 ----- */}
                <div className="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">

                        {/* ---- Titulo ---- */}
                        <span className="text-[24px] font-bold text-black text-opacity-50 xl:text-[32px] hover:text-[#2a8784]">{texts[3].title}</span>

                        <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                    </button>

                    {/* ---- Contenido Acordeon ---- */}
                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">

                        {/* ---- Tarjetas ---- */}
                        <div className="md:flex md:gap-x-5 xl:px-10 py-5">
                            <div className={`w-full md:flex-1 h-28 md:h-44 lg:h-52  overflow-hidden px-5 rounded-lg transition-colors duration-300 relative ${(cantidad === "250" ? 'bg-[#2a8784]' : 'bg-[#f4f1eb]')}`}>
                                <input type="radio" name="cantidad" id="250" value="250" className="absolute opacity-0 w-full h-full" onChange={onHandleChangeCantidad} />
                                <label htmlFor="250" className="absolute top-0 left-0 w-full h-full cursor-pointer"></label>
                                <div className={`${(cantidad === "250" && 'text-white')} mt-5 md:mt-7`}>
                                    <h2 className="text-[20px] font-bold">{texts[3].card1.title}</h2>
                                    <p className="font-light">{texts[3].card1.description}</p>
                                </div>
                            </div>
                            <div className={`w-full md:flex-1 h-28 md:h-44 lg:h-52  overflow-hidden px-5 rounded-lg transition-colors duration-300  relative ${(cantidad === "500" ? 'bg-[#2a8784]' : 'bg-[#f4f1eb]')} mt-5 md:mt-0`}>
                                <input type="radio" name="cantidad" id="500" value="500" className="absolute opacity-0 w-full h-full" onChange={onHandleChangeCantidad} />
                                <label htmlFor="500" className="absolute top-0 left-0 w-full h-full cursor-pointer"></label>
                                <div className={`${(cantidad === "500" && 'text-white')} mt-5 md:mt-7`}>
                                    <h2 className="text-[20px] font-bold">{texts[3].card2.title}</h2>
                                    <p className="font-light">{texts[3].card2.description}</p>
                                </div>
                            </div>
                            <div className={`w-full md:flex-1 h-28 md:h-44 lg:h-52  overflow-hidden px-5 rounded-lg transition-colors duration-300  relative ${(cantidad === "1000" ? 'bg-[#2a8784]' : 'bg-[#f4f1eb]')} mt-5 md:mt-0`}>
                                <input type="radio" name="cantidad" id="1000" value="1000" className="absolute opacity-0 w-full h-full" onChange={onHandleChangeCantidad} />
                                <label htmlFor="1000" className="absolute top-0 left-0 w-full h-full cursor-pointer"></label>
                                <div className={`${(cantidad === "1000" && 'text-white')} mt-5 md:mt-7`}>
                                    <h2 className="text-[20px] font-bold">{texts[3].card3.title}</h2>
                                    <p className="font-light">{texts[3].card3.description}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ---- Acordeon #4 ----- */}
                <div className="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">

                        {/* ---- Titulo ---- */}
                        <span className="text-[24px] font-bold text-black text-opacity-50 xl:text-[32px] hover:text-[#2a8784]">{texts[4].title}</span>

                        <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                    </button>

                    {/* ---- Contenido Acordeon ---- */}
                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">

                        {/* ---- Tarjetas ---- */}
                        <div className="md:flex md:gap-x-5 xl:px-10 py-5">
                            <div className={`w-full md:flex-1 h-28 md:h-44 lg:h-52  overflow-hidden px-5 rounded-lg transition-colors duration-300 relative ${(tiempo === "week" ? 'bg-[#2a8784]' : 'bg-[#f4f1eb]')}`}>
                                <input type="radio" name="tiempo" id="week" value="week" className="absolute opacity-0 w-full h-full" onChange={onHandleChangeTiempo} />
                                <label htmlFor="week" className="absolute top-0 left-0 w-full h-full cursor-pointer"></label>
                                <div className={`${(tiempo === "week" && 'text-white')} mt-5 md:mt-7`}>
                                    <h2 className="text-[20px] font-bold">{texts[4].card1.title}</h2>
                                    <p className="font-light">{texts[4].card1.description}</p>
                                </div>
                            </div>
                            <div className={`w-full md:flex-1 h-28 md:h-44 lg:h-52  overflow-hidden px-5 rounded-lg transition-colors duration-300  relative ${(tiempo === "2 weeks" ? 'bg-[#2a8784]' : 'bg-[#f4f1eb]')} mt-5 md:mt-0`}>
                                <input type="radio" name="tiempo" id="2 weeks" value="2 weeks" className="absolute opacity-0 w-full h-full" onChange={onHandleChangeTiempo} />
                                <label htmlFor="2 weeks" className="absolute top-0 left-0 w-full h-full cursor-pointer"></label>
                                <div className={`${(tiempo === "2 weeks" && 'text-white')} mt-5 md:mt-7`}>
                                    <h2 className="text-[20px] font-bold">{texts[4].card2.title}</h2>
                                    <p className="font-light">{texts[4].card2.description}</p>
                                </div>
                            </div>
                            <div className={`w-full md:flex-1 h-28 md:h-44 lg:h-52  overflow-hidden px-5 rounded-lg transition-colors duration-300  relative ${(tiempo === "month" ? 'bg-[#2a8784]' : 'bg-[#f4f1eb]')} mt-5 md:mt-0`}>
                                <input type="radio" name="tiempo" id="month" value="month" className="absolute opacity-0 w-full h-full" onChange={onHandleChangeTiempo} />
                                <label htmlFor="month" className="absolute top-0 left-0 w-full h-full cursor-pointer"></label>
                                <div className={`${(tiempo === "month" && 'text-white')} mt-5 md:mt-7`}>
                                    <h2 className="text-[20px] font-bold">{texts[4].card3.title}</h2>
                                    <p className="font-light">{texts[4].card3.description}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ---- Resumen Pedido ---- */}
                <div className="w-full  bg-[#2c343e] rounded-lg mt-14 px-5 py-10">
                    <h2 className="font-light text-sm text-white text-opacity-50">ORDER SUMMARY</h2>
                    <p className="text-[20px] font-bold text-white leading-8 mt-2">
                        Bebo café usando <span className="text-[#2a8784]">{(formato) ? formato : "____"}</span>
                        , con un tipo de grano <span className="text-[#2a8784]">{(type) ? type : "____"}</span> Enviadme
                        <span className="text-[#2a8784]"> {(cantidad) ? cantidad : "____"}g</span> <span className="text-[#2a8784]"> {(tiempo) ? `cada ${tiempo}` : "____"}</span>
                    </p>
                </div>

                {/* ---- Modal ----  */}
                <ModalCheckout
                    tiempo={tiempo as string}
                    cantidad={cantidad as string}
                    formato={formato as string}
                    type={type as string} />

            </div>
        </div>
    )
}



