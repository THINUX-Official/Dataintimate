import {SideBar} from "@/view/common/SideBar/SideBar";
import 'tailwindcss/tailwind.css'
import 'bootstrap/dist/css/bootstrap.css'


import {NavBar} from "@/view/common/NavBar/NavBar";
import {StatusBar} from "@/view/common/StatusBar/StatusBar";


export default function Home() {
    return (
        <>
            <div>
                <NavBar/>
                <div className="flex">
                    <SideBar/>
                    <StatusBar/>
                </div>
            </div>
        </>
    );
}
