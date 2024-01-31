import React from 'react'

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Chart from './Chart';
export default function Graph() {
    const yearlyOptionsList = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
    ];
    return (
        <div className="flex flex-1 flex-col gap-4 h-[400px] md:h-auto items-start justify-start w-full">
            <div className="bg-white-A700 flex flex-col gap-2 items-start justify-start p-2 sm:px-5 rounded-[16px] w-full">
                <div className="flex flex-row gap-2 items-center justify-between w-full">
                    <Text
                        className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                        size="txtInterSemiBold20"
                    >
                        Growth
                    </Text>
                </div>
                <Chart />
                {/* <div className="h-40 sm:h-[174px] relative w-full">
                    <div className="absolute left-[0] top-[0] w-[95%] sm:w-full">
                        <Img
                            className="absolute h-32 object-cover right-[0] top-[0] w-[405px]"
                            src="images/img_maskgroup.png"
                            alt="maskgroup"
                        />
                        <div className="flex flex-col gap-4 h-[137px] md:h-auto items-center justify-between m-auto relative w-auto">
                            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
                                <Text
                                    className="text-[10px] text-gray-600 tracking-[-0.30px] w-[22px]"
                                    size="txtInterMedium10"
                                >
                                    100k
                                </Text>
                                <Line className="bg-blue_gray-50 h-px w-[91%]" />
                            </div>
                            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
                                <Text
                                    className="flex-1 text-[10px] text-gray-600 tracking-[-0.30px] w-auto"
                                    size="txtInterMedium10"
                                >
                                    50k
                                </Text>
                                <Line className="bg-blue_gray-50 h-px w-[91%]" />
                            </div>
                            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
                                <Text
                                    className="flex-1 text-[10px] text-gray-600 tracking-[-0.30px] w-auto"
                                    size="txtInterMedium10"
                                >
                                    20k
                                </Text>
                                <Line className="bg-blue_gray-50 h-px w-[91%]" />
                            </div>
                            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
                                <Text
                                    className="flex-1 text-[10px] text-gray-600 tracking-[-0.30px] w-auto"
                                    size="txtInterMedium10"
                                >
                                    10k
                                </Text>
                                <Line className="bg-blue_gray-50 h-px w-[91%]" />
                            </div>
                            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
                                <Text
                                    className="flex-1 text-[10px] text-gray-600 tracking-[-0.30px] w-auto"
                                    size="txtInterMedium10"
                                >
                                    0
                                </Text>
                                <Line className="bg-blue_gray-50 h-px w-[91%]" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex flex-row gap-[30px] h-full inset-y-[0] items-center justify-between my-auto right-[3%] w-[434px] sm:w-full">
                        <List
                            className="sm:flex-col flex-row gap-[30px] grid grid-cols-4 w-[46%]"
                            orientation="horizontal"
                        >
                            <div className="flex flex-col gap-4 h-40 md:h-auto items-center justify-start w-auto">
                                <Line className="bg-blue_gray-50 h-[129px] w-px" />
                                <Text
                                    className="text-[10px] text-center text-gray-600 tracking-[-0.30px] w-[22px]"
                                    size="txtInterMedium10"
                                >
                                    2016
                                </Text>
                            </div>
                            <div className="flex flex-col gap-4 h-40 md:h-auto items-center justify-start w-auto">
                                <Line className="bg-blue_gray-50 h-[129px] w-px" />
                                <Text
                                    className="text-[10px] text-center text-gray-600 tracking-[-0.30px] w-[22px]"
                                    size="txtInterMedium10"
                                >
                                    2017
                                </Text>
                            </div>
                            <div className="flex flex-col gap-4 h-40 md:h-auto items-center justify-start w-auto">
                                <Line className="bg-blue_gray-50 h-[129px] w-px" />
                                <Text
                                    className="text-[10px] text-center text-gray-600 tracking-[-0.30px] w-[22px]"
                                    size="txtInterMedium10"
                                >
                                    2018
                                </Text>
                            </div>
                            <div className="flex flex-col gap-4 h-40 md:h-auto items-center justify-start w-auto">
                                <Line className="bg-blue_gray-50 h-[129px] w-px" />
                                <Text
                                    className="text-[10px] text-center text-gray-600 tracking-[-0.30px] w-[22px]"
                                    size="txtInterMedium10"
                                >
                                    2019
                                </Text>
                            </div>
                        </List>
                        <div className="flex flex-col gap-4 h-40 md:h-auto items-center justify-start w-auto">
                            <Line className="bg-blue_gray-50 h-[129px] w-px" />
                            <Text
                                className="text-[10px] text-center text-gray-600 tracking-[-0.30px] w-6"
                                size="txtInterMedium10"
                            >
                                2020
                            </Text>
                        </div>
                        <div className="flex flex-col gap-4 h-40 md:h-auto items-center justify-start w-auto">
                            <Line className="bg-blue_gray-50 h-[129px] w-px" />
                            <Text
                                className="text-[10px] text-center text-gray-600 tracking-[-0.30px] w-[21px]"
                                size="txtInterMedium10"
                            >
                                2021
                            </Text>
                        </div>
                        <List
                            className="sm:flex-col flex-row gap-[30px] grid grid-cols-2 w-[21%]"
                            orientation="horizontal"
                        >
                            <div className="flex flex-col gap-4 h-40 md:h-auto items-center justify-start w-auto">
                                <Line className="bg-blue_gray-50 h-[129px] w-px" />
                                <Text
                                    className="text-[10px] text-center text-gray-600 tracking-[-0.30px] w-[23px]"
                                    size="txtInterMedium10"
                                >
                                    2022
                                </Text>
                            </div>
                            <div className="flex flex-col gap-4 h-40 md:h-auto items-center justify-start w-auto">
                                <Line className="bg-blue_gray-50 h-[129px] w-px" />
                                <Text
                                    className="text-[10px] text-center text-gray-600 tracking-[-0.30px] w-6"
                                    size="txtInterMedium10"
                                >
                                    2023
                                </Text>
                            </div>
                        </List>
                    </div>
                </div> */}
            </div>
            <List
                className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-3 h-[90%] justify-start w-full"
                orientation="horizontal"
            >
                <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[90%] items-start justify-start p-4 rounded-[16px] w-full">
                    <Text
                        className="text-base text-gray-600 tracking-[-0.40px] w-auto"
                        size="txtInterSemiBold16"
                    >
                        Top month
                    </Text>
                    <div className="flex flex-col h-[90%] items-start justify-end w-full">
                        <Text
                            className="text-2xl md:text-[22px] text-lime-900 sm:text-xl tracking-[-0.20px] w-auto"
                            size="txtInterSemiBold24"
                        >
                            November
                        </Text>
                        <Text
                            className="text-amber-700 text-base tracking-[-0.20px] w-auto"
                            size="txtInterMedium16"
                        >
                            2019
                        </Text>
                    </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[90%] items-start justify-start p-4 rounded-[16px] w-full">
                    <Text
                        className="text-base text-gray-600 tracking-[-0.40px] w-auto"
                        size="txtInterSemiBold16"
                    >
                        Top year
                    </Text>
                    <div className="flex flex-col gap-1 h-[90%] items-start justify-end w-full">
                        <Text
                            className="text-2xl md:text-[22px] text-lime-900 sm:text-xl tracking-[-0.20px] w-auto"
                            size="txtInterSemiBold24"
                        >
                            2023
                        </Text>
                        <Text
                            className="text-gray-800 text-sm tracking-[-0.30px] w-auto"
                            size="txtInterRegular14Gray800"
                        >
                            96K sold so far
                        </Text>
                    </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[90%] items-start justify-start p-4 rounded-[16px] w-full">
                    <Text
                        className="text-base text-gray-600 tracking-[-0.40px] w-auto"
                        size="txtInterSemiBold16"
                    >
                        Top buyer
                    </Text>
                    <div className="flex flex-col gap-2 h-full items-start justify-end w-full">
                        <div className="flex flex-col h-6 items-center justify-start w-6">
                            <Img
                                className="h-6 md:h-auto rounded-[50%] w-6"
                                src="images/img_rectangle1_24x24.png"
                                alt="rectangleOne"
                            />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center w-full">
                            <Text
                                className="text-gray-900 text-xs tracking-[-0.30px] w-auto"
                                size="txtInterMedium12"
                            >
                                Maggie Johnson
                            </Text>
                            <Text
                                className="text-[10px] text-gray-800 tracking-[-0.30px] w-auto"
                                size="txtInterRegular10Gray800"
                            >
                                Oasis Organic Inc.
                            </Text>
                        </div>
                    </div>
                </div>
            </List>
        </div>
    )
}
