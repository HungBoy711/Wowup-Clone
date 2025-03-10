"use client"
import { Button, Input } from "./ui";
import React, { useState } from "react";

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="max-w-full h-[450px] bg-slate-900 justify-items-center">
            <div className="w-[1200px] h-[400px] flex justify-center items-center gap-10">
                <div className="w-[500px] h-[300px] -mt-16">
                    <img className="object-cover w-28" src="/logoFT1.png" />
                    <p className="text-white">
                        Email:
                        sale@wowup.vn
                    </p>
                    <p className="text-white pt-2">
                        Điện thoại:
                        (+84)818 990 465
                    </p>
                    <p className="text-white pt-2">
                        Trụ sở chính:
                    </p>
                    <p className="text-white pt-2">
                        Số 75A Minh Khai, phường Lê Mao, thành phố Vinh, Nghệ An
                    </p>
                    <div className="flex justify-between w-32 text-white pt-2">
                        <div>
                            In
                        </div>
                        <div>
                            Face
                        </div>
                        <div>
                            Zalo
                        </div>
                    </div>
                    <div className="flex justify-between w-60 text-white pt-6">
                        <a>
                            Trang chủ
                        </a>
                        <a>
                            Dịch vụ
                        </a>
                        <a>
                            Dự án
                        </a>
                    </div>
                </div>
                <div className="w-[700px] h-[300px] bg-gray-950 rounded-3xl -mt-10">
                    <div className="font-sans font-extrabold text-white text-5xl mt-3 pt-8 pl-8 pb-0">
                        Chúng tôi ở đây
                    </div>

                    <div className="font-sans font-normal text-[#727272] text-xl p-8">
                        Cánh cửa của chúng tôi luôn mở cho một tách cà phê ngon
                    </div>

                    <div className="flex w-[500px] ">
                        <Input
                            placeholder="Số điện thoại"
                            type="text"
                            className="text-gray-200 bg-transparent w-[180px] h-[50px] ml-8 pl-5 border border-gray-500 rounded-full"
                        />
                        <Input
                            placeholder="exp@gmail.com"
                            type="text"
                            className="text-gray-200 bg-transparent w-[180px] h-[50px] ml-8 pl-5 border border-gray-500 rounded-full"
                        />
                        < Button
                            text=">"
                            bgColor="bg-blue-500"
                            textColor="text-white"
                            fullWidth="w-12 h-12 ml-2"
                            border="border border-blue-500 rounded-full"
                        />
                        <img className="absolute w-72  transform translate-x-[500px] -translate-y-24" src="https://wowup.vn/_ipx/fit_inside&s_550x550/background/coffee.webp" />
                    </div>
                </div>

            </div>
            <hr className="w-full border-t-2 border-[#727272]" />
            <p className="text-[#727272] mt-2">
                c 2024 Được thiết kế và phát triển bởi WowUp
            </p>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                {/* Tiêu đề có thể nhấn */}
                <div
                    className="w-80 p-4 bg-white rounded-lg shadow-md cursor-pointer select-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <h2 className="text-lg font-semibold flex justify-between items-center">
                        Tiêu đề
                    </h2>

                    {/* Nội dung mở ra bên trong tiêu đề */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <p className="mt-2 text-gray-600">Đây là nội dung mở rộng bên trong tiêu đề.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
