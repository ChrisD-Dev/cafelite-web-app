import { CalidadSection, CommitmentSection, HeadQuartersSection, HeroSectionAbout } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'Este es el about de la web',
    keywords: ["cafe", "coffe", "nextjs"]
}


const page = () => {
    return (
        <div className="flex-grow">
            <HeroSectionAbout />
            <CommitmentSection />
            <CalidadSection />
            <HeadQuartersSection />
        </div>
    )
}

export default page;


