const imageURL = "assets/about-us/img-hero-alternative.jpg"

const text =
{
    title: "Sobre Nosotros",
    text: "Comenzamos nuestro viaje de descubrimiento exótico en 1999, destacando historias de café de todo el mundo. Desde entonces, nos hemos dedicado a llevar la taza perfecta, desde el grano hasta la preparación, en cada envío."
}

export const HeroSectionAbout = () => {
    return (
        <section className="w-full max-w-[85rem]  pb-32  px-6 md:px-12  mx-auto">
            <div
                style={{
                    backgroundImage: `url(${imageURL})`,
                }}
                className="bg-cover bg-center w-full h-[430px] xl:h-[520px] rounded-xl overflow-hidden md:flex md:justify-end"
            >
                {/* ---- BG Opacity in Phone ---- */}
                <div className='h-full w-full md:hidden  bg-[#313131] bg-opacity-60 px-6 flex items-center justify-center '>

                    {/* ---- Text ---- */}
                    <div className=' text-center  md:w-[50%] xl:flex-1 xl:px-16'>
                        <h1 className='text-white text-opacity-90 text-4xl font-bold'>{text.title}</h1>
                        <p className='text-white text-opacity-85 text-sm mt-8 leading-6'
                        >{text.text}</p>
                    </div>
                </div>

                <div className="hidden md:flex items-center w-[370px] xl:w-fit h-full md:mr-5 xl:mr-16">
                    <div>
                        <h1 className='text-white text-opacity-90 text-4xl font-bold xl:text-[65px]'>{text.title}</h1>
                        <p className='text-white text-opacity-85 text-sm mt-8 xl:text-[16px] xl:w-[490px] leading-6'>{text.text}</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

