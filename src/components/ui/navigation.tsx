import Image from "next/image";
"use client";
import React, { useState, useEffect } from "react";
import Button from "./button";
import Link from 'next/link'


export default function Navigation() {
    const [color, setColor] = useState(false)
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor(true);
            } else {
                setColor(false);
            }
        };

        changeColor();
        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    return (
        <nav className={`fixed border-gray-200 top-0 left-0 w-full z-10 transition duration-300 ease-in-out  ${color ? "bg-slate-900" : "bg-none"}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-start gap-8 mx-auto p-4">
                <a>
                    < img src="/logo.png" className="h-[60px] w-[250px]" alt="Wowup Logo" />
                </a>
                <div className="w-full hidden lg:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#services" className="block py-2 px-3 text-white hover:text-blue-500">Dịch vụ</a>
                        </li>
                        <li>
                            <a href="#projects" className="block py-2 px-3 text-white hover:text-blue-500">Dự án</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white hover:text-blue-500">Bài viết</a>
                        </li>

                    </ul>
                </div>
                <div className="w-full hidden xl:flex md:w-auto ml-auto">
                    <span className="mr-8 text-white">
                        VI
                    </span>
                    < Button
                        text="Hồ sơ công ty"
                        textColor="text-white"
                        fullWidth="w-40 h-10 mr-4"
                        border="border border-white rounded-3xl"
                    />
                    < Button
                        text="Liên hệ"
                        bgColor="bg-white"
                        textColor="text-black"
                        fullWidth="w-40 h-10"
                        border="border rounded-3xl"
                    />
                </div>
            </div>
        </nav>
    );
}
