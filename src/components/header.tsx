import Image from "next/image";
import Button from "./button";

export default function Header() {
    return (
        <nav className="fixed bg-none border-gray-200 dark:bg-gray-900 top-0 left-0 w-full mt-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-start gap-20 mx-auto p-4">
                <a>
                    <img src="" className="h-8" alt="Wowup Logo" />
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white hover:text-blue-500">Dịch vụ</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white hover:text-blue-500">Dự án</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white hover:text-blue-500">Bài viết</a>
                        </li>

                    </ul>
                </div>
                <div className="ml-auto">
                    < Button
                        text="Hồ sơ công ty"
                        bgColor=""
                        textColor="text-white"
                        fullWidth="w-40 h-10 mr-4"
                        icon=""
                        border="border border-white rounded-3xl"
                    />
                    < Button
                        text="Liên hệ"
                        bgColor="bg-white"
                        textColor="text-black"
                        fullWidth="w-40 h-10"
                        icon=""
                        border="border rounded-3xl"
                    />
                </div>
            </div>
        </nav>
    );
}
