import React from 'react'

import { Button, Img, Line, List, SelectBox, Text } from "components";
export default function Customers() {
    const sortByNewestOptionsList = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
    ];
    return (
        <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[400px] md:h-auto items-start justify-start py-6 rounded-[16px] w-full">
            <div className="flex flex-row gap-2 items-center justify-between sm:px-5 px-6 w-full">
                <Text
                    className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                    size="txtInterSemiBold20"
                >
                    Customers
                </Text>
                <SelectBox
                    className="sm:flex-1 leading-[normal] text-gray-800 text-left text-sm tracking-[-0.30px] w-[24%] sm:w-full"
                    placeholderClassName="text-gray-800"
                    indicator={
                        <Img
                            className="h-3.5 w-3.5"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                        />
                    }
                    isMulti={false}
                    name="frameFive"
                    options={sortByNewestOptionsList}
                    isSearchable={false}
                    placeholder="Sort by Newest"
                />
            </div>
            <div className="flex flex-col h-full items-start justify-start px-2 w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start p-4 w-full">
                    <div className="flex flex-col h-8 items-center justify-start w-8">
                        <Img
                            className="h-8 md:h-auto rounded-[50%] w-8"
                            src="images/img_rectangle1_32x32.png"
                            alt="rectangleOne_One"
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-0.5 items-start justify-center w-full">
                        <Text
                            className="text-gray-900 text-sm tracking-[-0.30px] w-auto"
                            size="txtInterMedium14"
                        >
                            Chris Friedkly
                        </Text>
                        <Text
                            className="text-gray-800 text-xs tracking-[-0.30px] w-auto"
                            size="txtInterRegular12"
                        >
                            Supermarket Villanova
                        </Text>
                    </div>
                </div>
                <div className="bg-yellow-50 flex sm:flex-col flex-row gap-3 items-center justify-start p-4 rounded-[16px] w-full">
                    <div className="flex flex-col h-8 items-center justify-start w-8">
                        <Img
                            className="h-8 md:h-auto rounded-[50%] w-8"
                            src="images/img_rectangle1_1.png"
                            alt="rectangleOne_Two"
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-0.5 items-start justify-center w-full">
                        <Text
                            className="text-gray-900 text-sm tracking-[-0.30px] w-auto"
                            size="txtInterMedium14"
                        >
                            Maggie Johnson
                        </Text>
                        <Text
                            className="text-gray-800 text-xs tracking-[-0.30px] w-auto"
                            size="txtInterRegular12"
                        >
                            Oasis Organic Inc.
                        </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <List
                            className="sm:flex-col flex-row gap-1 grid grid-cols-3 justify-start w-auto"
                            orientation="horizontal"
                        >
                            <div className="flex flex-col h-9 md:h-auto items-center justify-center w-full">
                                <Img
                                    className="h-4 w-4"
                                    src="images/img_contrast.svg"
                                    alt="contrast"
                                />
                            </div>
                            <div className="flex flex-col h-9 md:h-auto items-center justify-center w-full">
                                <Img
                                    className="h-4 w-4"
                                    src="images/img_signal.svg"
                                    alt="signal"
                                />
                            </div>
                            <div className="flex flex-col h-9 md:h-auto items-center justify-center w-full">
                                <Img
                                    className="h-4 w-4"
                                    src="images/img_edit.svg"
                                    alt="edit"
                                />
                            </div>
                        </List>
                        <Line className="bg-lime-900_6c h-6 w-px" />
                        <div className="flex flex-col h-9 md:h-auto items-center justify-center w-9">
                            <Img
                                className="h-4 w-4"
                                src="images/img_iconfromtablerio_gray_900.svg"
                                alt="iconfromtableri_Four"
                            />
                        </div>
                    </div>
                </div>
                <List
                    className="flex flex-col gap-px items-center w-full"
                    orientation="vertical"
                >
                    <div className="flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-4 w-full">
                        <div className="flex flex-col h-8 items-center justify-start w-8">
                            <Img
                                className="h-8 md:h-auto rounded-[50%] w-8"
                                src="images/img_rectangle1_2.png"
                                alt="rectangleOne"
                            />
                        </div>
                        <div className="flex flex-1 flex-col gap-0.5 items-start justify-center w-full">
                            <Text
                                className="text-gray-900 text-sm tracking-[-0.30px] w-auto"
                                size="txtInterMedium14"
                            >
                                Gael Harry
                            </Text>
                            <Text
                                className="text-gray-800 text-xs tracking-[-0.30px] w-auto"
                                size="txtInterRegular12"
                            >
                                New York Finest Fruits
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-4 w-full">
                        <div className="flex flex-col h-8 items-center justify-start w-8">
                            <Img
                                className="h-8 md:h-auto rounded-[50%] w-8"
                                src="images/img_rectangle1_3.png"
                                alt="rectangleOne"
                            />
                        </div>
                        <div className="flex flex-1 flex-col gap-0.5 items-start justify-center w-full">
                            <Text
                                className="text-gray-900 text-sm tracking-[-0.30px] w-auto"
                                size="txtInterMedium14"
                            >
                                Jenna Sullivan
                            </Text>
                            <Text
                                className="text-gray-800 text-xs tracking-[-0.30px] w-auto"
                                size="txtInterRegular12"
                            >
                                Walmart
                            </Text>
                        </div>
                    </div>
                </List>
            </div>
            <div className="flex flex-col items-end justify-start sm:px-5 px-6 w-full">
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Text
                        className="text-lime-900 text-sm tracking-[-0.30px] w-auto"
                        size="txtInterRegular14Lime900"
                    >
                        All customers
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
