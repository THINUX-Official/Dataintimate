import {FaDownload} from "react-icons/fa";
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

            <div className="flex">
                <div className="w-[60%] mr-3">
                    <AreaChart/>
                </div>
                <div className="w-[40%]">
                    <DoughnutChart/>
                </div>

            </div>

            <div>
            <ProgressBar/>
                <ColorCards/>
            </div>
        </>
    );
};