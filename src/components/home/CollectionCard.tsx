"use client"

import { motion } from "framer-motion"

interface Props {
    src: string,
    name: string,
    description: string,
    index: number
}


export const CollectionCard = ({ src, name, description, index }: Props) => {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }} // Establece la posición y la opacidad inicial
            animate={{ y: 0, opacity: 1 }} // Define la animación de salida
            transition={{ ease: "easeInOut", duration: 0.35, delay: 0.1 * index }}
        >
            <div className="text-center md:text-left mt-14  md:flex md:px-20 lg:px-40 xl:flex-col xl:px-0 xl:text-center">
                {/* <Image alt={name} src={src} height={200} width={200} className="w-44 mx-auto md:w-64" /> */}
                <img src={src} alt={name} className="w-44 mx-auto md:w-80" />
                <div className="md:pt-5 xl:w-72  xl:mx-auto">
                    <h2 className="text-[24px] font-bold mt-3">{name}</h2>
                    <p className="text-[15px] mt-3 ">{description}</p>
                </div>
            </div>
        </motion.div>

    )
}
