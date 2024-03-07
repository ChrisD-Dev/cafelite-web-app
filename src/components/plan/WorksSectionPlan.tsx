import { WorksCardPlan } from ".."

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


export const WorksSectionPlan = () => {
    return (
        <section className="w-full max-w-[85rem] mx-auto  px-5 md:px-10">
            <div className="w-full bg-[#2c343e] rounded-xl">
                {/* ---- Tarjeta ---- */}
                <div className="text-center px-5 xl:px-10 md:flex md:gap-x-7 lg:gap-x-10 py-16 xl:py-32 ">
                    {
                        texts.map((txt, index) => (
                            <WorksCardPlan
                                key={index}
                                title={txt.title}
                                subtitle={txt.subtitle}
                                text={txt.text} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
