import {FaDownload} from "react-icons/fa";
import {ProgressBar} from "@/view/common/ProgressBar/ProgressBar";
import {ColorCards} from "@/view/common/ColorCards/ColorCards";
import {AreaChart} from "@/view/common/AreaChart/AreaChart";
import {DoughnutChart} from "@/view/common/DoughnutChart/DoughnutChart";
import {StatusCards} from "@/view/common/StatusCards/StatusCards";
import {Illustration} from "@/view/common/Illustration/Illustration";
import {DevApproach} from "@/view/common/DevApproach/DevApproach";

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

            <div className="flex flex-wrap justify-content-between">
                <div className="lg:w-[70%] w-[100%] lg:mr-3">
                    <AreaChart/>
                </div>
                <div className="lg:w-[29%] w-[100%]">
                    <DoughnutChart/>
                </div>

            </div>


            <div className="flex flex-wrap justify-content-between">
                <div className="lg:w-[50%] lg:mr-3">
                    <ProgressBar/>
                    <ColorCards/>
                </div>

                <div className="lg:w-[49%] w-[100%]">
                    <Illustration/>
                    <div className="mt-3">
                        <DevApproach/>
                    </div>
                </div>
            </div>

        </>
    );
};