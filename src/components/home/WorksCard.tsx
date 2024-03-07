interface Props {
    title: string,
    subtitle: string,
    text: string
}

export const WorksCard = ({ title, text, subtitle }: Props) => {
    return (
        <div className=" py-7 md:flex-1">
            <h1 className="text-7xl font-bold text-[#f7d1d2]">{title}</h1>
            <h2 className="text-[28px]  text-black md:h-20 font-bold mt-5 text-opacity-90  px-10">{subtitle}</h2>
            <p className="text-[15px] mt-5 text-black text-opacity-90 ">{text}</p>
        </div>
    )
}
