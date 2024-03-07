"use client"

interface Props {
    formato: string,
    tiempo: string,
    cantidad: string,
    type: string
}

export const ModalCheckout = ({ tiempo, formato, type, cantidad }: Props) => {
    return (
        <div className={`${(formato && cantidad && type && tiempo) ? 'inline-block' : 'hidden'}`}>
            <button type="button" className="btnCustom" data-hs-overlay="#hs-slide-down-animation-modal">
                Crea tu plan
            </button>

            <div id="hs-slide-down-animation-modal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className="flex flex-col bg-white  shadow-sm rounded-xl pointer-events-auto overflow-hidden">
                        <div className="flex justify-between items-center py-7 px-7 bg-[#2c343e] ">

                            {/* ---- Titulo ----  */}
                            <h3 className="text-[28px] font-bold text-white text-opacity-80">
                                Resumen Pedido
                            </h3>
                            <button type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-black hover:bg-opacity-40 disabled:opacity-50 disabled:pointer-events-none " data-hs-overlay="#hs-slide-down-animation-modal">
                                <span className="sr-only">Close</span>
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>

                        {/* ---- Body ----  */}
                        <div className="px-7 py-14  overflow-y-auto text-[20px] ">
                            <p className="mt-1 text-gray-800 dark:text-gray-400 text-[24px] font-bold leading-9">
                                “Bebo café usando <span className="text-[#2a8784]">{formato}</span>
                                , con un tipo de grano <span className="text-[#2a8784]">{type}</span>. Enviadme
                                <span className="text-[#2a8784]"> {cantidad}g</span> cada <span className="text-[#2a8784]"> {tiempo}</span>”
                            </p>
                            <p className="text-[16px] text-black text-opacity-65 mt-5">
                                ¿Está correcto? Puede proceder al pago o volver a la selección de plan si algo está mal. Los códigos de descuento de la suscripción también se pueden canjear en el proceso de pago.
                            </p>
                            <div className=" w-full mt-8 flex justify-center">
                                <button
                                    data-hs-overlay="#hs-slide-down-animation-modal"
                                    type="button"
                                    className="btnCustom "
                                >
                                    Pagar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

{/* <p className="text-[20px] font-bold text-white leading-8 mt-2">
                        Bebo café usando <span className="text-[#2a8784]">{(formato) ? formato : "____"}</span>
                        , con un tipo de grano <span className="text-[#2a8784]">{(type) ? type : "____"}</span> Enviadme
                        <span className="text-[#2a8784]"> {(cantidad) ? cantidad : "____"}g</span> <span className="text-[#2a8784]"> {(tiempo) ? `cada ${tiempo}` : "____"}</span>
                    </p> */}