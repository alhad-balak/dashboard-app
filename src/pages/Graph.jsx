import React from 'react'

import { Img, List, SelectBox, Text } from "components";
import Chart from './Chart';
export default function Graph() {
    const yearlyOptionsList = [
        { label: "2016", value: "2016" },
        { label: "2017", value: "2017" },
        { label: "2018", value: "2018" },
    ];
    return (
        <div className="flex flex-1 flex-col gap-4 h-[400px] md:h-auto items-start justify-start w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-start p-2 sm:px-5 rounded-[16px] w-full">
                <div className="flex px-3 flex-row items-center justify-between w-full">
                    <Text
                        className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                        size="txtInterSemiBold20"
                    >
                        Growth
                    </Text>
                    <div className="flex flex-row items-center justify-end w-full">
                        <SelectBox
                            className="sm:flex-1 leading-[normal] text-gray-800 text-left text-sm tracking-[-0.30px] w-[20%] sm:w-full"
                            placeholderClassName="text-gray-800"
                            indicator={
                                <Img
                                    className="h-3.5 w-3.5"
                                    src="images/img_arrowdown.svg"
                                    alt="arrow_down"
                                />
                            }
                            isMulti={false}
                            name="frameFive_One"
                            options={yearlyOptionsList}
                            isSearchable={false}
                            placeholder="Monthly"
                        />
                    </div>
                </div>
                <Chart />
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
                    <div className="flex flex-col h-[70%] items-start justify-end w-full">
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
                    <div className="flex flex-col h-full items-start justify-end w-full">
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
