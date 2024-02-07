import {FaSearch} from "react-icons/fa";
import {IoMdNotifications} from "react-icons/io";
import {MdEmail} from "react-icons/md";
import {FaUserAlt} from "react-icons/fa";


export function StatusBar() {
    return (
        <>
            <div className="w-full h-14 flex justify-content-between items-center px-3">
                <div className="flex items-center text-white text-[10px] justify-self-start">
                    <input className="rounded-start-1 h-7 w-72 pl-2 bg-gray-100 text-black" type="text" placeholder="Search for..."
                           aria-label="Search" aria-describedby="basic-addon"/>
                    <div className="h-7 p-2 bg-blue-500 rounded-end-1 "><FaSearch/></div>
                </div>

                <div className="flex items-center">
                    <div className="h-8 border-r border-gray-300">
                        <button type="button"
                                className="text-gray-300 hover:text-gray-400 px-3 py-2">
                            <IoMdNotifications/>
                        </button>

                        <button type="button"
                                className="text-gray-300 hover:text-gray-400 px-3 py-2">
                            <MdEmail/>
                        </button>
                    </div>

                    <div className="flex pl-4 pt-2">
                        <h1 className="text-gray-300 text-[11px]">Douglass McGee</h1>
                        <div className="px-3">
                            <FaUserAlt/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}