'use client'

import {FaCalendar, FaClipboardList, FaDollarSign} from "react-icons/fa";
import {IoChatbubblesSharp} from "react-icons/io5";
import React from "react";

export const StatusCards = () => {
    return (
        <>
            <div className="flex justify-content-between mt-3">
                <div
                    className="bg-white rounded py-4 px-2 flex justify-between items-center w-full mr-3 h-14 border-l-2 border-blue-500">
                    <div className="pt-2">
                        <h1 className="text-[8px] text-blue-500">EARNING (MONTHLY)</h1>
                        <h1 className="text-[14px] text-gray-500">$40,000</h1>
                    </div>

                    <div>
                        <FaCalendar className="text-gray-200"/>
                    </div>
                </div>

                <div
                    className="bg-white rounded py-4 px-2 flex justify-between items-center w-full mr-3 h-14 border-l-2 border-green-500">
                    <div className="pt-2">
                        <h1 className="text-[8px] text-green-500">EARNING (ANNUAL)</h1>
                        <h1 className="text-[14px] text-gray-500">$215,000</h1>
                    </div>

                    <div>
                        <FaDollarSign className="text-gray-200"/>
                    </div>
                </div>

                <div
                    className="bg-white rounded py-4 px-2 flex justify-between items-center w-full mr-3 h-14 border-l-2 border-cyan-500">
                    <div className="pt-2">
                        <h1 className="text-[8px] text-cyan-500">TASKS</h1>
                        <div className="flex">
                            <h6 className="pr-3 text-gray-500">50%</h6>

                            {/*<div className="progress w-auto h-[2px]">
                                <div className="progress-bar bg-info w-[50%] h-2" role="progressbar"
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>*/}

                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-cyan-500 h-2 rounded-full w-[50%]"></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <FaClipboardList className="text-gray-200"/>
                    </div>
                </div>

                <div
                    className="bg-white rounded py-4 px-2 flex justify-between items-center w-full  h-14 border-l-2 border-orange-300">
                    <div className="pt-2">
                        <h1 className="text-[8px] text-orange-300">PENDING REQUEST</h1>
                        <h1 className="text-[14px] text-gray-500">18</h1>
                    </div>

                    <div>
                        <IoChatbubblesSharp className="text-gray-200"/>
                    </div>
                </div>
            </div>
        </>
    );
};