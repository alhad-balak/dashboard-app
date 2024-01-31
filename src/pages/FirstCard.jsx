import React from 'react'
import { Button, Img, Line, List, SelectBox, Text } from "components";

export default function FirstCard({ Heading, Percentage, Details, NextPageName }) {
    return (
        <div className="bg-white-A700 flex flex-col gap-2 h-[261px] items-start justify-start p-6 sm:px-5 rounded-[16px] sm:w-[100%] md:w-[30%] w-full">
            <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                    className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                    size="txtInterSemiBold20"
                >
                    {Heading}
                </Text>
            </div>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
                <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[-2.00px] w-auto"
                    size="txtInterMedium48"
                >
                    {Percentage}
                </Text>
                <Img
                    className="h-8 w-8"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                />
            </div>
            <Text
                className="text-gray-800 text-sm tracking-[-0.30px] w-auto"
                size="txtInterRegular14Gray800"
            >
                {Details}
            </Text>
            <div className="flex flex-col h-[74px] md:h-auto items-end justify-end pt-4 w-auto">
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Text
                        className="text-lime-900 text-sm tracking-[-0.30px] w-auto"
                        size="txtInterRegular14Lime900"
                    >
                        {NextPageName}
                    </Text>
                    <Img
                        className="h-3.5 w-3.5"
                        src="images/img_arrowleft_lime_900.svg"
                        alt="arrowleft_One"
                    />
                </div>
            </div>
        </div>
    )
}
