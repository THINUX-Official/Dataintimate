import {FaDownload} from "react-icons/fa";
import {FaCalendar} from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { HiChatAlt2 } from "react-icons/hi";




export const Dashboard = () => {
    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-[16px] text-gray-500 ">Dashboard</h1>
                <button className="bg-blue-500 rounded-sm text-[9px] text-white px-1 py-1 h-5 flex justify-center ">
                    <div>
                        <FaDownload className="mx-1"/>
                    </div>
                    Generate Report
                </button>
            </div>

            <div className="flex justify-content-between py-4">
                <div
                    className="bg-white rounded py-4 px-2 flex justify-between items-center w-full mx-2 h-14 border-l-2 border-blue-500">
                    <div className="pt-2">
                        <h1 className="text-[8px] text-blue-500">EARNING (MONTHLY)</h1>
                        <h1 className="text-[14px] text-gray-500">$40,000</h1>
                    </div>

                    <div>
                        <FaCalendar className="text-gray-200"/>
                    </div>
                </div>

                <div
                    className="bg-white rounded py-4 px-2 flex justify-between items-center w-full mx-2 h-14 border-l-2 border-green-500">
                    <div className="pt-2">
                        <h1 className="text-[8px] text-green-500">EARNING (ANNUAL)</h1>
                        <h1 className="text-[14px] text-gray-500">$215,000</h1>
                    </div>

                    <div>
                        <FaDollarSign className="text-gray-200"/>
                    </div>
                </div>

                <div
                    className="bg-white rounded py-4 px-2 flex justify-between items-center w-full mx-2 h-14 border-l-2 border-cyan-500">
                    <div className="pt-2">
                        <h1 className="text-[8px] text-cyan-500">TASKS</h1>
                        <h1 className="text-[14px] text-gray-500">$40,000</h1>
                    </div>

                    <div>
                        <FaClipboardList className="text-gray-200"/>
                    </div>
                </div>

                <div
                    className="bg-white rounded py-4 px-2 flex justify-between items-center w-full mx-2 h-14 border-l-2 border-orange-300">
                    <div className="pt-2">
                        <h1 className="text-[8px] text-orange-300">PENDING REQUEST</h1>
                        <h1 className="text-[14px] text-gray-500">$40,000</h1>
                    </div>

                    <div>
                        <HiChatAlt2 className="text-gray-200"/>
                    </div>
                </div>
            </div>
        </>
    );
};