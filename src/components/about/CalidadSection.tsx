"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"


const imageURL = "assets/about-us/img-quality.jpg"

const text =
{
    title: "Calidad",
    text: "Aunque trabajamos con cultivadores que prestan mucha atención a todas las etapas de la cosecha y el procesamiento, en nuestro lado, implementamos un riguroso programa de control de calidad para evitar el sobre-tostado o el secado excesivo del café. Cada bolsa de café lleva etiquetada la fecha de tostado y el número de lote. Nuestro objetivo es tostar café consistente y fácil de usar, para que prepararlo sea sencillo y agradable."
}

export const CalidadSection = () => {

    // Utilizamos para que la animacion se lleve a cabo cuando entre en el view.
    const { ref, inView } = useInView({
        triggerOnce: true, // Cambia a false si quieres que la animación se dispare cada vez que el elemento entra en la vista.
    });

    const animation = useAnimation();

    if (inView) {
        animation.start({
            x: 0,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.35, delay: 0.1 }
        });
    }

    return (
        <section className="w-full max-w-[85rem]  px-6 md:px-12 mx-auto mt-32  md:mt-64">
            <div className="w-full bg-[#2c343e] text-center rounded-xl pb-16 xl:pb-28 pt-28 md:pt-44 lg:pt-20 px-5 sm:px-10 md:px-20 lg:text-left relative">

                <motion.div
                    className="w-[80%] h-[150px]  shadow-md absolute -top-[60px] left-[10%] md:h-[280px] md:-top-[130px] lg:w-[200px] lg:h-[460px] lg:left-[70%] lg:-top-[80px] xl:w-[460px] xl:left-[57%]"
                    animate={animation}
                    initial={{ x: -20, opacity: 0 }}
                >
                    <div
                        style={{
                            backgroundImage: `url(${imageURL})`,
                        }}
                        className="bg-cover bg-center  rounded-xl h-full w-full"
                    ></div>
                </motion.div>

                <div
                    ref={ref}
                    className="lg:w-[400px] xl:w-[500px]">
                    <h2 className="text-[32px] text-opacity-90 font-bold text-white">{text.title}</h2>
                    <p className="text-opacity-90 text-white mt-5">{text.text}</p>
                </div>
            </div>
        </section>
    )
}
