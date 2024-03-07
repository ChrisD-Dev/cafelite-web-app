import { ChooseSectionPlan, HeroSectionPlan, WorksSectionPlan } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Plan',
    description: 'Aquí puedes crear tu plan de café personalizado.',
    keywords: ["cafe", "coffe", "nextjs"]
}


const page = () => {
    return (
        <div className="flex-grow">

            <HeroSectionPlan />

            <WorksSectionPlan />

            <ChooseSectionPlan />
        </div>
    )
}

export default page;
