import 'tailwindcss/tailwind.css'
import {FaFaceGrinWink} from "react-icons/fa6";
import {AiFillDashboard} from "react-icons/ai";
import {IoMdSettings} from "react-icons/io";
import {TiSpanner} from "react-icons/ti";
import {FaFolder} from "react-icons/fa";
import {IoBarChartSharp} from "react-icons/io5";
import {FaTable} from "react-icons/fa";


export const SideBar = () => {
    return (
        <>
            <div className="mt-11 bg-gradient-to-b from-blue-500 to-blue-600 w-56 h-screen px-3 text-gray-300">

                <div className="flex justify-center items-center border-b">
                    <div className="text-[25px] py-4 -rotate-45 ">
                        <FaFaceGrinWink/>
                    </div>
                    <h1 className="font-bold text-[13px] text-center py-4 pl-3">SB ADMIN</h1>
                    <small className="pb-2 font-bold text-[9px] pl-1.5">2</small>
                </div>

                <div className="flex py-4 border-b">
                    <div>
                        <AiFillDashboard/>
                    </div>
                    <h1 className="text-[11px] font-bold px-1.5">Dashboard</h1>
                </div>

                <div className="border-b pt-3">
                    <h1 className="text-[9px] font-medium">INTERFACE</h1>

                    <div className="flex pt-3">
                        <div>
                            <IoMdSettings/>
                        </div>
                        <h1 className="text-[11px] font-medium px-1.5 hover:text-white">Components</h1>
                    </div>

                    <div className="flex py-3">
                        <div>
                            <TiSpanner/>
                        </div>
                        <h1 className="text-[11px] font-medium px-1.5 hover:text-white">Utilities</h1>
                    </div>
                </div>

                <div className="border-b pt-3">
                    <h1 className="text-[9px] font-medium">ADDONS</h1>

                    <div className="flex pt-3">
                        <div>
                            <FaFolder/>
                        </div>
                        <h1 className="text-[11px] font-medium px-1.5 hover:text-white">Pages</h1>
                    </div>

                    <div className="flex pt-4">
                        <div>
                            <IoBarChartSharp/>
                        </div>
                        <h1 className="text-[11px] font-medium px-1.5 hover:text-white">Charts</h1>
                    </div>

                    <div className="flex pt-4 pb-3">
                        <div>
                            <FaTable/>
                        </div>
                        <h1 className="text-[11px] font-medium px-1.5 hover:text-white">Tables</h1>
                    </div>
                </div>
            </div>
        </>
    );
};