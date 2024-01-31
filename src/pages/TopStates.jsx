import React from 'react'

import {Text } from "components";
export default function TopStates() {
    return (
        <div className="bg-white-A700 flex sm:flex-1 flex-col gap-2 h-64 md:h-auto items-start justify-start p-6 sm:px-5 rounded-[16px] sm:w-full">
            <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                    className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                    size="txtInterSemiBold20"
                >
                    Top states
                </Text>
            </div>
            <div className="bg-gradient  flex flex-row gap-2 items-start justify-center px-2 py-1.5 rounded w-full">
                <Text
                    className="text-gray-900 text-sm uppercase w-auto"
                    size="txtInterSemiBold14"
                >
                    NY
                </Text>
                <Text
                    className="text-[10px] text-gray-900 text-right uppercase w-auto"
                    size="txtInterMedium10Gray900"
                >
                    120k
                </Text>
            </div>
            <div className="bg-gradient  flex flex-row gap-2 items-start justify-center px-2 py-1.5 rounded w-[229px]">
                <Text
                    className="text-gray-900 text-sm uppercase w-auto"
                    size="txtInterSemiBold14"
                >
                    MA
                </Text>
                <Text
                    className="text-[10px] text-gray-900 text-right uppercase w-auto"
                    size="txtInterMedium10Gray900"
                >
                    80k
                </Text>
            </div>
            <div className="bg-gradient  flex flex-row gap-2 items-start justify-center px-2 py-1.5 rounded w-[207px]">
                <Text
                    className="text-gray-900 text-sm uppercase w-auto"
                    size="txtInterSemiBold14"
                >
                    NH
                </Text>
                <Text
                    className="text-[10px] text-gray-900 text-right uppercase w-auto"
                    size="txtInterMedium10Gray900"
                >
                    70k
                </Text>
            </div>
            <div className="bg-gradient  flex flex-row gap-2 items-start justify-center px-2 py-1.5 rounded w-[150px]">
                <Text
                    className="text-gray-900 text-sm uppercase w-auto"
                    size="txtInterSemiBold14"
                >
                    OR
                </Text>
                <Text
                    className="text-[10px] text-gray-900 text-right uppercase w-auto"
                    size="txtInterMedium10Gray900"
                >
                    50k
                </Text>
            </div>
        </div>
    )
}
