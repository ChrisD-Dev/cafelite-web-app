import { HeadQuarterCard } from ".."

const headquarters = [
    {
        img: "assets/about-us/illustration-uk.svg",
        h2: "United Kingdom",
        h3: "68 Asfordby Rd",
        h4: "Alcaston",
        h5: "SY6 1YA",
        h6: "+44 1241 918425",
    },
    {
        img: "assets/about-us/illustration-canada.svg",
        h2: "Canada",
        h3: "1528 Eglinton Avenue",
        h4: "Toronto",
        h5: "Ontario M4P 1A6",
        h6: "+1 416 485 2997",
    },
    {
        img: "assets/about-us/illustration-australia.svg",
        h2: "Australia",
        h3: "36 Swanston Street",
        h4: "Kewell",
        h5: "Victoria",
        h6: "+61 4 9928 3629",
    },
]

export const HeadQuartersSection = () => {
    return (
        <section className="w-full max-w-[85rem]  px-6 md:px-12 mx-auto mt-32  md:mt-32 mb-20">
            <div className="w-full rounded-xl">
                <div>
                    <h2 className="text-center text-[28px] font-bold text-black text-opacity-50 ">Nuestras Oficinas</h2>
                </div>
                <div className="md:flex md:justify-center md:gap-x-20 xl:gap-x-48 mt-10">
                    {
                        headquarters.map((hq, index) => (
                            <HeadQuarterCard
                                key={index}
                                index={index}
                                src={hq.img} h2={hq.h2} h3={hq.h3} h4={hq.h4} h5={hq.h5} h6={hq.h6} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
