"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

interface Props {
    src: string,
    h2: string,
    h3: string,
    h4: string,
    h5: string,
    h6: string,
    index: number
}

export const HeadQuarterCard = ({ src, h2, h3, h4, h5, h6, index }: Props) => {

    // Utilizamos para que la animacion se lleve a cabo cuando entre en el view.
    const { ref, inView } = useInView({
        triggerOnce: true, // Cambia a false si quieres que la animación se dispare cada vez que el elemento entra en la vista.
    });

    const animation = useAnimation();

    if (inView) {
        animation.start({
            y: 20,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.35, delay: 0.2 * index }
        });
    }


    return (
        <motion.div
            animate={animation}
            initial={{ y: 0, opacity: 0 }}
        >

            <div className="text-center text-[15px] mt-10 md:mt-0">
                <div className="h-16 flex  items-center">
                    <img
                        className="mx-auto "
                        src={src} alt="error" />
                </div>
                <h2 className="text-[24px] font-bold mt-7">{h2}</h2>
                <h3 className="mt-2">{h3}</h3>
                <h3
                    ref={ref}
                    className="mt-1">{h4}</h3>
                <h3 className="mt-1">{h5}</h3>
                <h3 className="mt-1">{h6}</h3>
            </div>
        </motion.div>
    )
}
