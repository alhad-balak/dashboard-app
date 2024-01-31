import React from 'react'

import { Button, Img, Line, List, SelectBox, Text } from "components";
export default function Chats() {
    return (
        <div className="bg-white-A700 flex sm:flex-1 flex-col gap-2 h-64 md:h-auto items-start justify-start p-6 sm:px-5 rounded-[16px] sm:w-full">
            <div className="flex flex-col gap-2 items-start justify-start pb-4 w-full">
                <Text
                    className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                    size="txtInterSemiBold20"
                >
                    Chats
                </Text>
                <Text
                    className="text-gray-800 text-sm tracking-[-0.30px] w-auto"
                    size="txtInterRegular14Gray800"
                >
                    2 unread messages
                </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-full">
                <List
                    className="sm:flex-col flex-row gap-2 grid grid-cols-2 w-[45%]"
                    orientation="horizontal"
                >
                    <div className="bg-yellow-50 flex flex-col items-center justify-start p-3 rounded-[16px] w-full">
                        <div className="relative w-8">
                            <Img
                                className="h-8 m-auto rounded-[50%] w-8"
                                src="images/img_rectangle1_1.png"
                                alt="rectangleOne"
                            />
                            <div className="absolute bg-red-400 h-1 outline outline-[2px] outline-yellow-50 right-[6%] rounded-[50%] top-[9%] w-1"></div>
                        </div>
                    </div>
                    <div className="bg-yellow-50 flex flex-col items-center justify-start p-3 rounded-[16px] w-full">
                        <div className="relative w-8">
                            <Img
                                className="h-8 m-auto rounded-[50%] w-8"
                                src="images/img_rectangle1_4.png"
                                alt="rectangleOne"
                            />
                            <div className="absolute bg-red-400 h-1 outline outline-[2px] outline-yellow-50 right-[6%] rounded-[50%] top-[9%] w-1"></div>
                        </div>
                    </div>
                </List>
                <List
                    className="sm:flex-col flex-row gap-2 grid grid-cols-2 w-[45%]"
                    orientation="horizontal"
                >
                    <div className="flex flex-col items-center justify-start p-3 w-full">
                        <div className="flex flex-col h-8 items-center justify-start w-8">
                            <Img
                                className="h-8 md:h-auto rounded-[50%] w-8"
                                src="images/img_rectangle1_5.png"
                                alt="rectangleOne"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-start p-3 w-full">
                        <div className="flex flex-col h-8 items-center justify-start w-8">
                            <Img
                                className="h-8 md:h-auto rounded-[50%] w-8"
                                src="images/img_rectangle1_6.png"
                                alt="rectangleOne"
                            />
                        </div>
                    </div>
                </List>
            </div>
            <div className="flex flex-col h-[71px] md:h-auto items-end justify-start pt-4 w-auto">
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Text
                        className="text-lime-900 text-sm tracking-[-0.30px] w-auto"
                        size="txtInterRegular14Lime900"
                    >
                        All messages
                    </Text>
                    <Img
                        className="h-3.5 w-3.5"
                        src="images/img_arrowleft_lime_900.svg"
                        alt="arrowleft_Two"
                    />
                </div>
            </div>
        </div>
    )
}
