"use client"


import Link from "next/link"
import { WorksCard } from ".."

const texts: { title: string, subtitle: string, text: string }[] = [
    {
        title: "01",
        subtitle: "Escoge tu café",
        text: "Selecciona de nuestra variedad en evolución de cafés artesanales. Nuestros granos son obtenidos de manera ética y pagamos precios justos por ellos. Cada mes hay cafés nuevos en todos los perfiles para que los pruebes."
    },
    {
        title: "02",
        subtitle: "Elije la frecuencia",
        text: "Personaliza la frecuencia de tu pedido, la cantidad, incluso el estilo de tostado y el tipo de molido. Pausa, salta o cancela tu suscripción sin compromiso a través de nuestro portal en línea."
    },
    {
        title: "03",
        subtitle: "Recibe y disfruta",
        text: "Enviamos tu paquete en un plazo de 48 horas, recién tostado. Siéntate y disfruta de cafés de clase mundial galardonados, seleccionados para brindarte una experiencia de sabor única."
    },
]


export const WorksSection = () => {

    const onHandleClick = () => {
        window.location.replace("/plan")
    }

    return (
        <section className="w-full max-w-[85rem] mx-auto mt-20 px-6  lg:mt-40 py-10">
            <div className="w-full ">

                {/* ---- Titulo ---- */}
                <div className="text-center ">
                    <h1 className="font-bold text-[24px] md:text-[32px] text-black text-opacity-50">¿Cómo Funciona?</h1>
                </div>


                {/* ---- Tarjeta ---- */}
                <div className="text-center px-5 mt-10  md:flex md:gap-x-5 lg:gap-x-10 ">
                    {
                        texts.map((txt, index) => (
                            <WorksCard
                                key={index}
                                title={txt.title}
                                subtitle={txt.subtitle}
                                text={txt.text} />
                        ))
                    }
                </div>
                <div className="w-full flex justify-center mt-10">
                    <Link href={"/plan"}>
                        <button
                            // onClick={onHandleClick}
                            className='btnCustom'>
                            Crea tu plan
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
