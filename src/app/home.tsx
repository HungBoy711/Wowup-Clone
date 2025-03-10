"use client"
import "../styles/animation.css"
import { Img } from "../components/ui";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi2";

export default function HomePage() {
    const [open, setOpen] = useState(0)
    const [currentIdx, setCurrentIdx] = useState(0)

    const imgBanner = [
        'https://wowup.vn/pattern/mock_carousel.webp',
        'https://wowup.vn/hero/anh2.webp',
        'https://wowup.vn/hero/anh3.webp',
        'https://wowup.vn/hero/anh4.webp'
    ]

    const handlePrevios = () => {
        setCurrentIdx((prevIdx) => (prevIdx === 0 ? imgBanner.length - 1 : prevIdx - 1));

    };

    const handleNext = () => {
        setCurrentIdx((prevIdx) => (prevIdx === imgBanner.length - 1 ? 0 : prevIdx + 1));
    };


    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => {
            clearInterval(interval)
        };
    }, [currentIdx]);

    const serviceContent = [{
        id: 0,
        title: "Thiết kế Ứng dụng di động và website",
        content: "Phát triển các ứng dụng di động và web tiên tiến để thu hút người dùng và nâng cao sự hiện diện kỹ thuật số của doanh nghiệp bạn. Giúp doanh nghiệp bạn làm việc dễ dàng hơn, WowUp luôn mang đến cho khách hàng cơ hội trải nghiệm dịch vụ và mang lại giá trị sản phẩm đáp ứng được nhu cầu của mọi khách hàng.",
        img: "https://wowup.vn/_ipx/s_1264x936/information/ex1.webp"
    },
    {
        id: 1,
        title: "Hệ thống CRM",
        content: "Tận dụng kinh nghiệm sâu rộng trong lĩnh vực chăm sóc khách hàng, WowUp cung cấp hệ thống tự động hóa việc quản lý thông tin khách hàng, hỗ trợ phân tích dữ liệu, tối ưu hóa các hình thức tiếp thị, hỗ trợ hợp tác nội bộ và tăng cường mối quan hệ với khách hàng, tất cả đều nhằm mục đích nâng cao hiệu quả kinh doanh và có được sự hài lòng của khách hàng.",
        img: "https://wowup.vn/_ipx/s_1264x936/information/ex2.webp"
    },
    {
        id: 2,
        title: "Cho thuê nhân sự IT",
        content: "Chúng tôi cung cấp nhiều chuyên gia CNTT có kỹ năng phát triển trang web, ứng dụng di động và công nghệ phần mềm để đẩy nhanh các dự án của công ty bạn. Đội ngũ của chúng tôi thành thạo trong các ngôn ngữ lập trình phổ biến như React Native, Node.js, Next.js, PHP và Vue.js.",
        img: "https://wowup.vn/_ipx/s_1264x936/information/ex3.webp"
    },
    {
        id: 3,
        title: "Thiết kế UI và giải pháp UX",
        content: "Đặt sự trải nghiệm của khách hàng lên hàng đầu, chúng tôi luôn thử nghiệm các giao diện phù hợp để tối ưu trải nghiệm người dùng nhất có thể. Tin tưởng vào WowUp, UI và UX của bạn sẽ thu hút khách hàng, tối đa hóa chuyển đổi của khách hàng trên nền tảng của bạn."
        , img: "https://wowup.vn/_ipx/s_1264x936/information/ex4.webp"
    },
    {
        id: 4,
        title: "Tư vấn phát triển sản phẩm",
        content: " Nếu bạn có ý tưởng phát triển công nghệ, đừng ngần ngại liên hệ WowUp ngay lập tức. Đội ngũ chuyên gia 9 năm kinh nghiệm của chúng tôi sẽ hướng dẫn bạn đến thành công. Chúng tôi sẽ nghiên cứu, phân tích và tạo ra chiến lược sản phẩm tốt nhất để tối đa hóa tiềm năng kinh doanh của doanh nghiệp bạn."
        , img: "https://wowup.vn/_ipx/s_1264x936/information/ex5.webp"
    }]

    const handleOpen = (id: any) => {
        setOpen(id);
    };


    return (
        <div>
            <section id="home" className="mb-5 ">
                <div
                    className="bg-[url(/bgBanner.png)] content-center w-full h-[780px] rounded-b-[90px] justify-items-center text-center bg-cover bg-center"
                >
                    <div className="mt-32">
                        <p className="z-0 font-sans text-neutral-10 mix-blend-overlay font-extrabold text-5xl sm:text-7xl xl:text-[156px] uppercase leading-[1.1] text-white">
                            Thiết kế<br />& Lập trình
                        </p>

                    </div>
                    <div className="max-w-[1250px] w-full flex flex-wrap justify-between -mt-[50px] ">
                        <div className="relative z-20">
                            <img className="z-10 w-[610px] h-[330px] rounded-3xl object-cover" src={imgBanner[currentIdx]} />
                            <button
                                className="w-20 h-20 absolute top-60 left-2 text-white border border-solid rounded-full bg-black flex items-center justify-center"
                                onClick={handlePrevios}>
                                <MdKeyboardArrowLeft size={36} />
                            </button>

                        </div>
                        <div className="relative z-20">
                            <img className="z-10 w-[610px] h-[330px] rounded-3xl object-cover" src={imgBanner[(currentIdx + 1) % imgBanner.length]} />
                            <button className="w-20 h-20 absolute top-60 right-2 text-white border border-solid rounded-full bg-black flex items-center justify-center"
                                onClick={handleNext}>
                                <MdKeyboardArrowRight size={36} />
                            </button>
                        </div>
                    </div>
                    <Img
                        className="w-[150px] h-[150px -top-[100px]  box_animate z-40 mt-[680px] left-1/2"
                        src="https://wowup.vn/_ipx/s_310x282/pattern/cube.svg"
                    />
                    <Img
                        className="w-[150px] h-[150px] -top-[100px]  box_animate z-40 mt-[350px] left-[50px]"
                        src="https://wowup.vn/_ipx/s_292x332/pattern/torus.svg"
                    />
                    <Img
                        className="w-[150px] h-[150px] -top-[100px]  box_animate z-40 mt-[280px] right-[100px]"
                        src="https://wowup.vn/_ipx/s_224x318/pattern/cone.svg"
                    />

                </div>
            </section>
            <div className="flex overflow-hidden p-4">
                <p className="marquee__line font-sans font-extrabold text-4xl text-[#000f1d] ">
                    Landing Page - CMR System - IT Staffing - UI UX Design - Development Consulting - Landing Page - CMR System - IT Staffing - UI UX Design - Landing Page - CMR System - IT Staffing - UI UX Design -
                </p>
            </div>

            <section id="services" className="grid place-items-center max-w-full h-[1250px] bg-[#000f1d] mt-5 mb-20 rounded-[90px]">
                <div>
                    <div className="w-[1200px] h-[400px] grid grid-flow-col grid-rows-2">
                        <div className="w-[550px] h-[100px] flex gap-5">
                            <div className="font-sans font-extrabold text-8xl text-[#C0C7D1]">
                                9
                            </div>
                            <div className="font-sans font-bold text-2xl text-[#F2F2F2] mt-2">
                                Năm
                                <p className=" text-base font-normal">
                                    Có kiến thức chuyên môn sâu rộng, đa lĩnh vực về công nghệ thông tin.
                                </p>
                            </div>
                        </div>
                        <div className="w-[550px] h-[100px] flex gap-5">
                            <div className="font-sans font-extrabold text-8xl text-[#C0C7D1]">
                                30+
                            </div>
                            <div className="font-sans font-bold text-2xl text-[#F2F2F2] mt-2">
                                Chuyên gia công nghệ
                                <p className=" text-base font-normal">
                                    Có chuyên môn kỹ thuật vững vàng và khả năng linh hoạt cao.
                                </p>
                            </div>
                        </div>
                        <div className="w-[550px] h-[100px] flex gap-5">
                            <div className="font-sans font-extrabold text-8xl text-[#C0C7D1]">
                                150+
                            </div>
                            <div className="font-sans font-bold text-2xl text-[#F2F2F2] mt-2">
                                Khách hàng hài lòng
                                <p className=" text-base font-normal">
                                    Cách tiếp cận chuyên nghiệp đã đáp ứng được nhu cầu của khách hàng.
                                </p>
                            </div>
                        </div>
                        <div className="w-[550px] h-[100px] flex gap-5">
                            <div className="font-sans font-extrabold text-8xl text-[#C0C7D1]">
                                120+
                            </div>
                            <div className="font-sans font-bold text-2xl text-[#F2F2F2] mt-2">
                                Dự án
                                <p className=" text-base font-normal">
                                    Những dịch vụ hoàn thiện đã được bàn giao thành công cho khách hàng.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1200px] h-[600px] bg-none grid grid-cols-2 gap-3">

                        <Img width={145} height={138} className="absolute z-10 left-[45%] transform -translate-y-10" src="https://wowup.vn/_ipx/s_290x276/pattern/rock.webp" />

                        <div className="z-10">
                            <div className="font-sans font-extrabold text-6xl text-[#C0C7D1]">
                                CHÚNG TÔI CÓ KINH NGHIỆM...
                            </div>
                            {serviceContent.map((item) => (
                                <div key={item.id}>
                                    {open === item.id && < img src={item.img} className="h-[450px] rounded-[50px] object-cover mt-5" />
                                    }
                                </div>
                            ))}

                        </div>
                        <div className="z-10">
                            {serviceContent.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => handleOpen(item.id)}
                                    className={`cursor-pointer rounded-[30px] bg-[#161E29]  mb-2 py-5 px-12`} >
                                    <div className="flex justify-between transform translate-y-1/2">
                                        <p className="font-sans font-bold text-2xl text-white ">
                                            {item.title}
                                        </p>
                                        <button className="text-white text-5xl font-thin ml-4">
                                            {open === item.id ? <HiOutlineMinus size={40} /> : <BsPlusLg size={40} />}
                                        </button>

                                    </div>
                                    <div className={`overflow-hidden transition-all duration-500  ${open === item.id ? "h-[180px] pt-5" : "h-0 "}`}>
                                        <p className="font-sans font-normal text-[#C6C6C6] mt-2">
                                            {item.content}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="max-w-full h-[2000px] mt-10 justify-items-center">
                <div className="w-[1250px] ">
                    <p className="font-sans font-extrabold whitespace-pre-wrap text-7xl uppercase leading-[1.1]">
                        DỰ ÁN CỦA CHÚNG TÔI
                    </p>
                    <div>
                        <div className="flex justify-between gap-4 ">
                            <div>
                                <div className="overflow-hidden w-full h-[350px] mt-2 rounded-[30px] cursor-pointer">
                                    <img
                                        src="https://wowup.vn/_ipx/_/project/7esl.webp"
                                        alt="7ESL"
                                        className="object-cover duration-150 ease-in-out hover:scale-110"
                                    />
                                </div>
                                <div className="font-sans text-2xl mt-3">7ESL</div>
                            </div>
                            <div>
                                <div className="overflow-hidden w-full h-[350px] mt-2 rounded-[30px] cursor-pointer">
                                    <img
                                        src="http://wowup.vn/_ipx/_/project/lunchwme.webp"
                                        alt="LunchWMe"
                                        className="object-cover duration-150 ease-in-out hover:scale-110"
                                    />
                                </div>
                                <p className="font-sans text-2xl mt-3">LUNCHWME</p>
                            </div>
                        </div>

                        <div className="flex justify-between mt-2">
                            <div>
                                <div className="overflow-hidden w-[820px] h-[820px] mt-2 rounded-[30px] cursor-pointer">
                                    <img
                                        src="https://wowup.vn/_ipx/_/project/aiwow.webp"
                                        alt="AI Wow"
                                        className="object-cover duration-150 ease-in-out hover:scale-110"
                                    />
                                </div>
                                <p className="font-sans text-2xl mt-3">AIWOW</p>
                            </div>
                            <div>
                                <div className="overflow-hidden w-[410px] h-[820px] mt-2 rounded-[30px] cursor-pointer">
                                    <img
                                        src="https://wowup.vn/_ipx/_/project/itourism.webp"
                                        alt="iTourism"
                                        className="object-cover duration-150 ease-in-out hover:scale-110"
                                    />
                                </div>
                                <p className="font-sans text-2xl mt-3">ITOURISM</p>
                            </div>
                        </div>

                        <div className="flex justify-between gap-4 mt-2">
                            <div>
                                <div className="overflow-hidden w-full h-[400px] mt-2 rounded-[30px] cursor-pointer">
                                    <img
                                        src="https://wowup.vn/_ipx/_/project/gostream.webp"
                                        alt="GoStream"
                                        className="w-full h-full object-cover duration-150 ease-in-out hover:scale-110"
                                    />
                                </div>
                                <p className="font-sans text-2xl mt-3">GOSTREAM</p>
                            </div>
                            <div>
                                <div className="overflow-hidden w-full h-[400px] mt-2 rounded-[30px] cursor-pointer">
                                    <img
                                        src="https://wowup.vn/_ipx/_/project/xsale.webp"
                                        alt="xSale"
                                        className="w-full h-full object-cover duration-150 ease-in-out hover:scale-110"
                                    />
                                </div>
                                <p className="font-sans text-2xl mt-3">XSALE</p>
                            </div>
                            <div>
                                <div className="overflow-hidden w-full h-[400px] mt-2 rounded-[30px] cursor-pointer">
                                    <img
                                        src="https://wowup.vn/_ipx/_/project/taumi.webp"
                                        alt="Taumi"
                                        className="w-full h-full object-cover duration-150 ease-in-out hover:scale-110"
                                    />
                                </div>
                                <p className="font-sans text-2xl mt-3">TAUMI</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
}
