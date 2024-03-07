"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

interface Props {
    icon: any,
    title: string,
    subtitle: string,
    index: number
}

export const ChooseCard = ({ icon, subtitle, title, index }: Props) => {

    // Utilizamos para que la animacion se lleve a cabo cuando entre en el view.
    const { ref, inView } = useInView({
        triggerOnce: true, // Cambia a false si quieres que la animación se dispare cada vez que el elemento entra en la vista.
    });

    const animation = useAnimation();

    if (inView) {
        animation.start({
            x: 0,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.35, delay: 0.2 * index }
        });
    }

    return (
        <motion.div
            className="lg:max-w-[360px]"
            animate={animation}
            initial={{ x: -20, opacity: 0 }}
        >
            <div className="bg-[#2a8784] px-10 py-10 w-full mt-5 rounded-lg">
                <div className='text-center md:flex md:text-left lg:text-center   lg:flex-col '>
                    <div className=" flex justify-center items-center">
                        {icon}
                    </div>
                    <div
                        ref={ref}
                        className=' md:ml-8 lg:ml-0 lg:mt-3 '>
                        <p className='text-[24px] mt-5 md:mt-0 xl:mt-5  text-white font-bold'>{title}</p>
                        <p className='text-[15px] mt-3 text-white'>{subtitle}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
