
import Link from "next/link"
import { BiSolidCoffeeBean } from "react-icons/bi"
import { BsTwitterX } from "react-icons/bs"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

export const Footer = () => {
    return (
        <footer className="w-full max-w-[85rem] py-10 mx-auto px-5">
            <div className="bg-[#2c343e] w-full  rounded-lg lg:flex lg:items-center">

                {/* ---- Logo ---- */}
                <div className="w-full flex justify-center py-5 lg:flex-1 ">
                    <Link href={"/"}>
                        <div className="flex items-center gap-x-2">
                            <BiSolidCoffeeBean className="h-7 w-7 text-[#2a8784]" />
                            <span className="font-bold text-2xl text-white">cafelite</span>
                        </div>
                    </Link>
                </div>

                {/* ---- Links ---- */}
                <div className="  text-center md:flex  md:justify-center md:gap-x-5 lg:flex-1  lg:gap-x-10">
                    <p className="py-2"> <Link className="linksFooter" href="/">Home</Link></p>
                    <p className="py-2"> <Link className="linksFooter" href="/about">About Us</Link> </p>
                    <p className="py-2"> <Link className="linksFooter" href="/plan">Create your plan</Link> </p>
                </div>

                {/* ---- Redes Sociales ---- */}
                <div className="w-full flex justify-center gap-x-5 py-10 lg:flex-1 cursor-pointer">
                    <FaInstagram className="iconsFooter " />
                    <BsTwitterX className="iconsFooter " />
                    <FaFacebookSquare className="iconsFooter " />
                </div>
            </div>
        </footer>
    )
}
