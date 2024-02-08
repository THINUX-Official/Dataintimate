'use client'

import 'tailwindcss/tailwind.css'
import {FaFaceGrinWink} from "react-icons/fa6";
import {AiFillDashboard} from "react-icons/ai";
import {IoIosArrowDropleftCircle, IoMdSettings} from "react-icons/io";
import {TiSpanner} from "react-icons/ti";
import {FaFolder, FaTable} from "react-icons/fa";
import {IoBarChartSharp} from "react-icons/io5";
import {MdKeyboardArrowRight} from "react-icons/md";


import {useState} from "react";

export const SideBar = () => {

    const [selectedItem, selectItem] = useState('dashboard');

    const [isCollapsedComponents, setIsCollapsedComponents] = useState(false);

    const toggleCollapseComponents = () => {
        setIsCollapsedComponents(!isCollapsedComponents);
    };

    const [isCollapseUtilities, setIsCollapseUtilities] = useState(false);

    const toggleCollapseUtilities = () => {
        setIsCollapseUtilities(!isCollapseUtilities);
    }

    const [isCollapsePages, setIsCollapsePages] = useState(false);

    const toggleCollapsePages = () => {
        setIsCollapsePages(!isCollapsePages);
    }

    return (
        <>
            <div
                className="bg-gradient-to-b from-[#4e73df] to-blue-600 lg:w-48 w-56 min-h-screen px-3 text-white text-opacity-50 select-none ">

                <div className="flex justify-center items-center border-b border-white border-opacity-25 text-white">
                    <div className="text-[25px] -rotate-[25deg] mt-[-10px]">
                        <FaFaceGrinWink/>
                    </div>
                    <h1 className="font-bold text-[13px] text-center py-3 pl-3">SB ADMIN</h1>
                    <small className="pb-3 font-bold text-[9px]  pl-1.5">2</small>
                </div>

                <div className="flex pt-3 pb-2 border-b border-white border-opacity-25 hover:text-white">
                    <div>
                        <AiFillDashboard/>
                    </div>
                    <h1 className="text-[11px] font-bold pt-[3px] px-1.5">Dashboard</h1>
                </div>

                <div className="border-b border-white border-opacity-25 pt-3">
                    <h1 className="text-[9px] font-medium">INTERFACE</h1>

                    {/*onClick={toggleCollapse}*/}
                    <button type="button" onClick={toggleCollapseComponents}>
                        <div className="flex pt-2 hover:text-white">
                            <div>
                                <IoMdSettings/>
                            </div>
                            <h1 className="text-[11px] font-medium px-1.5 pt-0.5">Components</h1>
                            <div className="ml-14">
                                <MdKeyboardArrowRight/>
                            </div>
                        </div>
                    </button>

                    {isCollapsedComponents && <div className="collapsed-content">
                        <h6 className="para-style">CUSTOM COMPONENTS:</h6>
                        <div>
                            <button className="button-style">Buttons</button>
                            <br/>
                            <button className="button-style">Cards</button>
                        </div>
                    </div>}

                    <button type="button" onClick={toggleCollapseUtilities}>
                        <div className="flex pt-3 pb-2 hover:text-white">
                            <div>
                                <TiSpanner/>
                            </div>
                            <h1 className="text-[11px] font-medium px-1.5 pt-0.5">Utilities</h1>
                            <div className="ml-[83px]">
                                <MdKeyboardArrowRight/>
                            </div>
                        </div>
                    </button>

                    {isCollapseUtilities && <div className="collapsed-content" style={{marginBottom: '10px'}}>
                        <h6 className="para-style">CUSTOM UTILITIES:</h6>
                        <div>
                            <button className="button-style">Colors</button>
                            <br/>
                            <button className="button-style">Borders</button>
                            <br/>
                            <button className="button-style">Animations</button>
                            <br/>
                            <button className="button-style">Other</button>
                        </div>
                    </div>}
                </div>

                <div className="border-b border-white border-opacity-25 pt-3">
                    <h1 className="text-[9px] font-medium">ADDONS</h1>

                    <button type="button" onClick={toggleCollapsePages}>
                        <div className="flex pt-2 hover:text-white">
                            <div>
                                <FaFolder/>
                            </div>
                            <h1 className="text-[11px] font-medium px-1.5 pt-0.5">Pages</h1>
                            <div className="lg:ml-[70px] ml-[90px]">
                                <MdKeyboardArrowRight/>
                            </div>
                        </div>
                    </button>

                    {isCollapsePages && <div className="collapsed-content">
                        <div>
                            <h6 className="para-style">LOGIN SCREENS:</h6>
                            <button className="button-style">Login</button>
                            <br/>
                            <button className="button-style">Register</button>
                            <br/>
                            <button className="button-style">Forgot Password</button>
                            <h6 className="para-style" style={{paddingTop: '8px'}}>OTHER PAGES:</h6>
                            <button className="button-style">404 Page</button>
                            <br/>
                            <button className="button-style">Blank Page</button>
                        </div>
                    </div>}

                    <div className="flex pt-4 hover:text-white">
                        <div>
                            <IoBarChartSharp/>
                        </div>
                        <h1 className="text-[11px] font-medium px-1.5 pt-0.5">Charts</h1>
                    </div>


                    <div className="flex pt-4 pb-2 hover:text-white">
                        <div>
                            <FaTable/>
                        </div>
                        <h1 className="text-[11px] font-medium px-1.5 pt-0.5">Tables</h1>
                    </div>


                </div>

                <div>
                    <button className="flex mx-auto my-3 text-[35px] text-opacity-50 hover:text-opacity-100">
                        <IoIosArrowDropleftCircle/>
                    </button>
                </div>
            </div>
        </>
    );
};