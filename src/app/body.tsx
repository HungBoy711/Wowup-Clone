import Image from "next/image";
import { BoxContent, Text, Box } from "../components";

export default function BodyP() {
    return (
        <div>
            <div>
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
                            bgColor=" "
                            fullWidth="w-[590px] h-[280px]"
                            border=" rounded-t-lg "
                            alignment=" "
                            children=""
                            image="/img1.jpg"

                        />
                        <Box
                            bgColor=" "
                            fullWidth="w-[590px] h-[280px]"
                            border=""
                            alignment=""
                            children=""
                            image="/img2.jpg"
                        />
                    </div>

                </BoxContent>
            </div>
            <div className="w-[1200px] h-[2000px]">

            </div>
        </div>
    );
}
