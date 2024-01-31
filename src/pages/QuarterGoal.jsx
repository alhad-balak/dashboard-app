import React from 'react'
import { Img,Text } from "components";
export default function QuarterGoal() {
    return (
        <div className="bg-white-A700 flex sm:flex-1 flex-col gap-2 h-[261px] items-center justify-start p-6 sm:px-5 rounded-[16px] sm:w-[100%] md:w-[30%]  w-full">
            <div className="flex flex-col items-start justify-center pb-4 w-full">
                <Text
                    className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                    size="txtInterSemiBold20"
                >
                    Quarter goal
                </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[102px] relative w-full">
                    <Img
                        className="absolute h-[102px] inset-[0] justify-center m-auto"
                        src="images/img_ellipse3.svg"
                        alt="ellipseThree"
                    />
                    <Img
                        className="absolute bottom-[0] h-[69px] left-[0]"
                        src="images/img_settings_blue_gray_100.svg"
                        alt="settings_One"
                    />
                    <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-end justify-end left-[0] my-auto pt-[51px] md:px-10 sm:px-5 px-[51px]"
                        style={{ backgroundImage: "url('images/img_group1.svg')" }}
                    >
                        <Text
                            className="mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 tracking-[-1.59px]"
                            size="txtInterMedium32"
                        >
                            84%
                        </Text>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-[55px] md:h-auto items-center justify-end pt-3 w-auto">
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Text
                        className="text-lime-900 text-sm tracking-[-0.30px] w-auto"
                        size="txtInterRegular14Lime900"
                    >
                        All goals
                    </Text>
                    <Img
                        className="h-3.5 w-3.5"
                        src="images/img_arrowleft_lime_900.svg"
                        alt="arrowleft"
                    />
                </div>
            </div>
        </div>
    )
}
