import Image from "next/image";
import { BoxContent, Text, Box } from "../components";

export default function BodyP() {
    return (
        <div>
            <div id="home">
                <BoxContent
                    bgColor="bg-gradient-to-r from-violet-900 to-teal-200 brightness-30"
                    fullWidth="content-center w-full h-[750px]"
                    border="rounded-b-[90px]"
                    alignment="justify-items-center text-center"
                >   <div className="mt-32">
                        <Text
                            text={`Thiết kế\n& Lập trình`}
                            textColor=" text-white font-extrabold"
                            font="font-sans"
                            fullWidth="whitespace-pre-wrap text-[150px] ] uppercase leading-[1.1] "
                        />
                    </div>
                    <div className="max-w-[1200px] w-full flex flex-wrap justify-between gap-4 -mt-14">
                        <Box
                            fullWidth="w-[590px] h-[280px]"
                            border=" "
                            alignment=" "
                            children=""
                            image="/img1.jpg"

                        />
                        <Box
                            fullWidth="w-[590px] h-[280px]"
                            border=""
                            alignment=""
                            children=""
                            image="/img2.jpg"
                        />
                    </div>

                </BoxContent>
            </div>
            <section id="services" className="grid place-items-center max-w-full h-[1300px] bg-[#000f1d] mt-20 mb-20 rounded-[90px]">
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
                        <div className="grid ">
                            <div className="rounded-[30px] h-[80px] bg-[#161E29] flex justify-center items-center">
                                <div className="flex">
                                    <p className="font-sans font-bold text-3xl text-white">
                                        Thiết kế ứng dụng di động và website
                                    </p>

                                </div>
                            </div>
                            <div className="rounded-[30px] h-[80px] bg-[#161E29] flex justify-center items-center">
                                <div className="flex">
                                    <p className="font-sans font-bold text-3xl text-white">
                                        Hệ thống CRM
                                    </p>

                                </div>
                            </div>
                            <div className="rounded-[30px] h-[80px] bg-[#161E29] flex justify-center items-center">
                                <div className="flex">
                                    <p className="font-sans font-bold text-3xl text-white">
                                        Cho thuê nhân sự IT
                                    </p>

                                </div>
                            </div>
                            <div className="rounded-[30px] h-[80px] bg-[#161E29] flex justify-center items-center">
                                <div className="flex">
                                    <p className="font-sans font-bold text-3xl text-white">
                                        Thiết kế UI và giải pháp UX
                                    </p>

                                </div>
                            </div>
                            <div className="rounded-[30px] h-[80px] bg-[#161E29] flex justify-center items-center">
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

        </div>
    );
}
