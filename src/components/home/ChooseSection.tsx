import React from 'react'
import { ChooseCard } from '..'
import { BiSolidCoffeeBean } from 'react-icons/bi'
import { SlPresent } from 'react-icons/sl'
import { TbTruckDelivery } from 'react-icons/tb'

const mainText: { title: string, parraph: string } = {
    title: "Why choose us?",
    parraph: "A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level."
}

const cardsText: { icon: any, title: string, subtitle: string }[] = [
    {
        icon: <BiSolidCoffeeBean className='iconCardChoose' />,
        title: "Mejor Calidad",
        subtitle: "Descubre una variedad infinita del mejor café artesanal del mundo de cada uno de nuestros tostadores.",
    },
    {
        icon: <SlPresent className='iconCardChoose' />,
        title: "Beneficios Exclusivos",
        subtitle: "Ofertas especiales y regalos al suscribirte, incluyendo un 30% de descuento en tu primer envío.",
    },
    {
        icon: <TbTruckDelivery className='iconCardChoose' />,
        title: "Envío gratuito",
        subtitle: "Cubrimos los costos y el café se entrega rápidamente. Frescura máxima: garantizada.",
    },
]

export const ChooseSection = () => {
    return (
        <section className='w-full max-w-[85rem] mx-auto px-6 md:px-12  flex-grow'>
            <div className='bg-[#2c343e] w-full rounded-xl px-10 py-10 lg:h-[485px]'>

                {/* ---- Titulo y texto ---- */}
                <div className='max-w-[560px] text-opacity-90 text-white text-center mt-5 mx-auto'>
                    <h2 className='text-[28px] font-bold'>{mainText.title}</h2>
                    <p className='text-[15px] mt-5'>{mainText.parraph}</p>
                </div>

                {/* ---- Cards ---- */}
                <div className='w-full mt-5 lg:relative'>
                    <div className='lg:flex gap-x-10 w-full lg:justify-center lg:absolute top-0 left-0'>
                        {
                            cardsText.map((card, index) => (
                                <ChooseCard
                                    key={index}
                                    index={index}
                                    icon={card.icon} title={card.title} subtitle={card.subtitle} />
                            ))
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}
