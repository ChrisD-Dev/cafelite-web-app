import { CollectionCard } from ".."


const coffees: { src: string, name: string, description: string }[] = [
    {
        src: "/assets/main/img-espresso.png",
        name: "Gran Expreso",
        description: "Mezcla ligera y sabrosa con cacao y pimienta negra para una experiencia intensa."
    },
    {
        src: "/assets/main/img-planalto.png",
        name: "Planalto",
        description: "Tueste oscuro brasileño con un cuerpo rico y aterciopelado, y toques de frutas y nueces."
    },
    {
        src: "/assets/main/img-danche.png",
        name: "Danche",
        description: "Mezcla etíope cosechada a mano, densamente empacada con notas de frutas vibrantes."
    }
]

export const CollectionSection = () => {
    return (
        <section className="w-full max-w-[85rem] mx-auto pb-20 xl:pb-32 ">
            <div className="text-center">
                <h2 className="font-bold text-[24px] md:text-[32px] text-black text-opacity-50">Nuestra Colección</h2>
            </div>

            <div className="px-10 xl:flex xl:gap-x-10 xl:justify-center">
                {
                    coffees.map((coffee, index) => (
                        <CollectionCard src={coffee.src} name={coffee.name} description={coffee.description} key={index} index={index} />
                    ))
                }
            </div>
        </section>
    )
}
