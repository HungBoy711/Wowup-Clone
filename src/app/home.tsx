import "../styles/animation.css"
import Body from "./page";
import { Img, Text } from "../components/ui";

export default function HomePage() {
    return (
        <div>
            <section id="home" className="mb-5 ">
                <div
                    className="bg-[url(/bgBanner.png)] content-center w-full h-[780px] rounded-b-[90px] justify-items-center text-center"
                >
                    <div className="mt-32">
                        <p className="z-0 font-sans text-neutral-10 mix-blend-overlay font-extrabold text-[150px] uppercase leading-[1.1] text-white">
                            Thiết kế<br />& Lập trình
                        </p>

                    </div>
                    <div className="max-w-[1250px] w-full flex flex-wrap justify-between -mt-[50px] z-20">
                        <Img
                            src="/img1.jpg"
                            className="z-10 w-[610px] h-[330px] rounded-3xl"
                        />
                        <Img
                            src="/img2.jpg"
                            className="z-10 w-[610px] h-[330px] rounded-3xl"
                        />
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
                        <div >
                            <div className="font-sans font-extrabold text-6xl text-[#C0C7D1]">
                                CHÚNG TÔI CÓ KINH NGHIỆM...
                            </div>
                            <img src="/laptop.jpg" className="h-[450px] rounded-[50px] object-cover mt-5" />
                        </div>
                        <div>
                            <div className="rounded-[30px] h-[80px] bg-[#161E29] flex justify-center items-center mb-2">
                                <div className="flex">
                                    <p className="font-sans font-bold text-3xl text-white">
                                        Thiết kế ứng dụng di động và website
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-[30px] h-[80px] bg-[#161E29] flex justify-center items-center mb-2">
                                <div className="flex">
                                    <p className="font-sans font-bold text-3xl text-white">
                                        Hệ thống CRM
                                    </p>

                                </div>
                            </div>
                            <div className="rounded-[30px] h-[80px] bg-[#161E29] flex justify-center items-center mb-2">
                                <div className="flex">
                                    <p className="font-sans font-bold text-3xl text-white">
                                        Cho thuê nhân sự IT
                                    </p>

                                </div>
                            </div>
                            <div className="rounded-[30px] h-[80px] bg-[#161E29] flex justify-center items-center mb-2">
                                <div className="flex">
                                    <p className="font-sans font-bold text-3xl text-white">
                                        Thiết kế UI và giải pháp UX
                                    </p>

                                </div>
                            </div>
                            <div className="rounded-[30px] h-[80px] bg-[#161E29] flex justify-center items-center mb-2">
                                <div className="flex">
                                    <p className="font-sans font-bold text-3xl text-white">
                                        Tư vấn phát triển phần mềm
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="max-w-full h-[2000px] mt-10 justify-items-center">
                {/* <div className="w-[1200px] h-full">
                    <Text
                        text={`DỰ ÁN CỦA CHÚNG TÔI`}
                        textColor=" font-extrabold"
                        font="font-sans"
                        fullWidth="whitespace-pre-wrap text-7xl uppercase leading-[1.1]"
                    />
                    <div className="flex justify-between">
                        <Box
                            fullWidth="w-[590px] h-[350px]"
                            alignment="mt-2"
                            image="/7esl.jpg">
                            <Text
                                text={`7ESL`}
                                font="font-sans"
                                fullWidth="text-2xl mt-3"

                            />
                        </Box>
                        <Box
                            fullWidth="w-[590px] h-[350px]"
                            alignment="mt-2"
                            image="/lunchwme.jpg">
                            <Text
                                text={`LUNCHWME`}
                                font="font-sans"
                                fullWidth="text-2xl mt-3"

                            />
                        </Box>
                    </div>
                    <div className="flex justify-between gap-2 mt-16">
                        <Box
                            fullWidth="w-[790px] h-[700px]"
                            alignment="mt-2"
                            image="/aiwow.webp">
                            <Text
                                text={`AIWOW`}
                                font="font-sans"
                                fullWidth="text-2xl mt-3"

                            />
                        </Box>
                        <Box
                            fullWidth="w-[390px] h-[700px]"
                            alignment="mt-2"
                            image="/itourism.webp">
                            <Text
                                text={`ITOURISM`}
                                font="font-sans"
                                fullWidth="text-2xl mt-3"

                            />
                        </Box>
                    </div>
                    <div className="flex justify-between gap-2 mt-16">
                        <Box
                            fullWidth="w-[400px] h-[400px]"
                            alignment="mt-2"
                            image="/gosteam.png">
                            <Text
                                text={`GOSTREAM`}
                                font="font-sans"
                                fullWidth="text-2xl mt-3"

                            />
                        </Box>
                        <Box
                            fullWidth="w-[400px] h-[400px]"
                            alignment="mt-2"
                            image="/xsale.png">
                            <Text
                                text={`ITOURISM`}
                                font="font-sans"
                                fullWidth="text-2xl mt-3"

                            />
                        </Box>
                        <Box
                            fullWidth="w-[400px] h-[400px]"
                            alignment="mt-2"
                            image="/taumi.webp">
                            <Text
                                text={`TAUMI`}
                                font="font-sans"
                                fullWidth="text-2xl mt-3"

                            />
                        </Box>
                    </div>
                </div> */}
            </section>
        </div>
    );
}
