import React from 'react'
import { Button, Img, Line, List, SelectBox, Text } from "components";

export default function NewDeals() {
    return (
        <div className="bg-white-A700 flex flex-1 flex-col gap-2 h-full items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
            <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                    className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                    size="txtInterSemiBold20"
                >
                    New deals
                </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-[99%]">
                    <div className="flex sm:flex-col flex-row gap-2 items-center justify-between sm:justify-start w-full">
                        <Button
                            className="cursor-pointer flex sm:flex-row items-center justify-center min-w-[116px]"
                            leftIcon={
                                <Img
                                    className="h-6 mr-2"
                                    src="images/img_icon_from_tablerio_amber_700.svg"
                                    alt="Icon (from Tabler.io)"
                                />
                            }
                        >
                            <div className="leading-[normal] sm:flex-row sm:justify-center text-left text-sm tracking-[-0.30px]">
                                Fruit2Go
                            </div>
                        </Button>
                        <Button
                            className="cursor-pointer flex items-center justify-center min-w-[157px]"
                            leftIcon={
                                <Img
                                    className="h-6 mr-2"
                                    src="images/img_icon_from_tablerio_amber_700.svg"
                                    alt="Icon (from Tabler.io)"
                                />
                            }
                        >
                            <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                                <>Marshall&#39;s MKT</>
                            </div>
                        </Button>
                        <Button
                            className="cursor-pointer flex items-center justify-center min-w-[99px]"
                            leftIcon={
                                <Img
                                    className="h-6 mr-2"
                                    src="images/img_icon_from_tablerio_amber_700.svg"
                                    alt="Icon (from Tabler.io)"
                                />
                            }
                        >
                            <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                                CCNT
                            </div>
                        </Button>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-[94%] md:w-full">
                        <Button
                            className="cursor-pointer flex items-center justify-center min-w-[179px]"
                            leftIcon={
                                <Img
                                    className="h-6 mr-2"
                                    src="images/img_icon_from_tablerio_amber_700.svg"
                                    alt="Icon (from Tabler.io)"
                                />
                            }
                        >
                            <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                                Joana Mini-market
                            </div>
                        </Button>
                        <Button
                            className="cursor-pointer flex items-center justify-center min-w-[174px]"
                            leftIcon={
                                <Img
                                    className="h-6 mr-2"
                                    src="images/img_icon_from_tablerio_amber_700.svg"
                                    alt="Icon (from Tabler.io)"
                                />
                            }
                        >
                            <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                                Little Brazil Vegan
                            </div>
                        </Button>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-between w-[99%] md:w-full">
                        <Button
                            className="cursor-pointer flex items-center justify-center min-w-[102px]"
                            leftIcon={
                                <Img
                                    className="h-6 mr-2"
                                    src="images/img_icon_from_tablerio_amber_700.svg"
                                    alt="Icon (from Tabler.io)"
                                />
                            }
                        >
                            <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                                Target
                            </div>
                        </Button>
                        <Button
                            className="cursor-pointer flex items-center justify-center min-w-[148px]"
                            leftIcon={
                                <Img
                                    className="h-6 mr-2"
                                    src="images/img_icon_from_tablerio_amber_700.svg"
                                    alt="Icon (from Tabler.io)"
                                />
                            }
                        >
                            <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                                Organic Place
                            </div>
                        </Button>
                        <Button
                            className="cursor-pointer flex items-center justify-center min-w-[117px]"
                            leftIcon={
                                <Img
                                    className="h-6 mr-2"
                                    src="images/img_icon_from_tablerio_amber_700.svg"
                                    alt="Icon (from Tabler.io)"
                                />
                            }
                        >
                            <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                                <>Morello&#39;s</>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
