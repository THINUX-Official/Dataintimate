import {FaCalendar, FaClipboardList, FaDollarSign} from "react-icons/fa";
import {IoChatbubblesSharp} from "react-icons/io5";

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
                        <h1 className="text-[14px] text-gray-500">$40,000</h1>
                    </div>

                    <div>
                        <FaClipboardList className="text-gray-200"/>
                    </div>
                </div>

                <div
                    className="bg-white rounded py-4 px-2 flex justify-between items-center w-full  h-14 border-l-2 border-orange-300">
                    <div className="pt-2">
                        <h1 className="text-[8px] text-orange-300">PENDING REQUEST</h1>
                        <h1 className="text-[14px] text-gray-500">$40,000</h1>
                    </div>

                    <div>
                        <IoChatbubblesSharp className="text-gray-200"/>
                    </div>
                </div>
            </div>
        </>
    );
};