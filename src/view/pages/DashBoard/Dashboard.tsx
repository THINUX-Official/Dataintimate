import {FaCalendar, FaClipboardList, FaDollarSign, FaDownload} from "react-icons/fa";
import {IoChatbubblesSharp} from "react-icons/io5";
import {ProgressBar} from "@/view/common/ProgressBar/ProgressBar";
import {ColorCards} from "@/view/common/ColorCards/ColorCards";
import {AreaChart} from "@/view/common/AreaChart/AreaChart";
import {DoughnutChart} from "@/view/common/DoughnutChart/DoughnutChart";
import {StatusCards} from "@/view/common/StatusCards/StatusCards";

export const Dashboard = () => {
    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-[16px] text-gray-500 ">Dashboard</h1>
                <button className="bg-blue-500 rounded-sm text-[9px] text-white px-1 py-1 h-5 flex justify-center">
                    <div>
                        <FaDownload className="mx-1"/>
                    </div>
                    Generate Report
                </button>
            </div>

            <div>
                <StatusCards/>
            </div>

            <div>
                <AreaChart/>
                <DoughnutChart/>
            </div>

            <div>
                <ProgressBar/>
                <ColorCards/>
            </div>
        </>
    );
};