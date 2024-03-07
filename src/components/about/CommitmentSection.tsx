"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const imageURL = "assets/about-us/img-commitment.jpg"

const text =
{
    title: "Nuestro Cometido",
    text: "Estamos construidos sobre una misión simple y un compromiso de hacer el bien en el camino. Queremos facilitarte la tarea de descubrir y preparar en casa el mejor café del mundo. Todo comienza en la fuente. Para ubicar los lotes específicos que deseamos comprar, viajamos casi 60 días al año tratando de comprender los desafíos y oportunidades en cada uno de estos lugares. Colaboramos con productores de café excepcionales y empoderamos a una comunidad global de agricultores con estándares muy por encima de los umbrales de comercio justo."
}


export const CommitmentSection = () => {

    const { ref, inView } = useInView({
        triggerOnce: true, // Cambia a false si quieres que la animación se dispare cada vez que el elemento entra en la vista.
    });

    return (
        <section className="w-full max-w-[85rem]  px-6 md:px-12 xl:px-32 mx-auto  md:flex md:gap-x-10 xl:gap-x-20">

            {/* ---- Image ---- */}
            <motion.div
                className="w-full  h-[470px] md:h-[420px] shadow-md"
                initial={{ x: -20, opacity: 0 }} // Establece la posición y la opacidad inicial
                animate={{ x: 0, opacity: 1 }} // Define la animación de salida
                transition={{ ease: "easeInOut", duration: 0.35, delay: 0.1 }}
            >
                <div
                    style={{
                        backgroundImage: `url(${imageURL})`,
                    }}
                    className="bg-cover bg-center w-full h-full rounded-xl overflow-hidden sm:px-12 xl:px-16"
                ></div>

            </motion.div>

            {/* ---- Title & Text ---- */}
            <div className="w-full  text-center md:text-left xl:pt-16">
                <h2 className="text-[24px] py-10 md:py-0 font-bold xl:text-[28px] text-black text-opacity-50">{text.title}</h2>
                <p className="text-[15px] md:mt-5">{text.text}</p>
            </div>

        </section>
    )
}
