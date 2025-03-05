"use client";
import React, { useState, useEffect } from "react";
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

    const navigation = [{
        href: '#services',
        name: "Dịch vụ"
    }, {
        href: '#projects',
        name: 'Dự án'
    }, {
        href: '',
        name: 'Bài viết'
    }
    ]

    return (
        <nav className={`fixed border-gray-200 top-0 left-0 w-full z-50 transition duration-300 ease-in-out  ${color ? "bg-slate-900" : "bg-none"}`}>
            <div className="max-w-[1260px] flex flex-wrap items-center justify-start gap-4 mx-auto px-0 py-6">
                <a>
                    < img src="https://wowup.vn/_ipx/s_410x66/logo_contrast.svg" className="h-[33px] w-[205px]" alt="Wowup Logo" />
                </a>
                <div className="w-full hidden lg:block md:w-auto" id="navbar-default">
                    <ul className="font-sans flex pl-10 space-x-10 ">
                        {navigation.map((item, idx) =>
                            <li key={idx}>
                                <a href={item.href} className="block py-2 px-1 text-white hover:text-blue-500">{item.name}</a>
                            </li>)}
                    </ul>
                </div>
                <div className="w-full hidden xl:flex md:w-auto ml-auto">
                    <span className="pr-8 py-2 text-white">
                        VI
                    </span>
                    <button className="w-40 h-10 mr-4 text-white border border-white rounded-3xl">
                        Hồ sơ công ty
                    </button>
                    <button className="w-40 h-10 bg-white text-black border rounded-3xl">
                        Liên hệ
                    </button>

                </div>
            </div>
        </nav>
    );
}
