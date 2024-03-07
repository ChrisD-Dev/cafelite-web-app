"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BiSolidCoffeeBean } from "react-icons/bi"




export const NavBar = () => {

    const pathname = usePathname()

    return (
        <>
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-8 dark:bg-gray-800">
                <nav className="max-w-[85rem] w-full mx-auto px-6 md:px-12 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between ">

                        {/* ---- Logo ---- */}
                        <Link href={"/"}>
                            <div className="flex items-center gap-x-2">
                                <BiSolidCoffeeBean className="h-7 w-7 text-[#2a8784]" />
                                <span className="font-bold text-2xl">cafelite</span>
                            </div>
                        </Link>


                        {/* ---- Hamburger Menu ---- */}
                        <div className="sm:hidden">
                            <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* ---- Links Navegacion ---- */}
                    <div id="navbar-collapse-with-animation" className="hs-collapse hidden  overflow-hidden transition-all duration-300 basis-full grow sm:block">
                        <div className="flex flex-col gap-10 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                            <Link className={`font-bold text-xs  hover:text-[#2a8784]  uppercase ${(pathname === "/") ? 'text-[#2a8784]' : 'text-gray-600'}`} href="/">Home</Link>
                            <Link className={`font-bold text-xs hover:text-[#2a8784]  uppercase ${(pathname === "/about") ? 'text-[#2a8784]' : 'text-gray-600'}`} href="/about">About Us</Link>
                            <Link className={`font-bold text-xs hover:text-[#2a8784]  uppercase ${(pathname === "/plan") ? 'text-[#2a8784]' : 'text-gray-600'}`} href="/plan">Create your plan</Link>
                        </div>
                    </div>
                </nav>
            </header>
            {/* <hr className="" /> */}
        </>
    )
}
