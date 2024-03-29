import {SideBar} from "@/view/common/SideBar/SideBar";
import 'tailwindcss/tailwind.css'
import 'bootstrap/dist/css/bootstrap.css'

import {StatusBar} from "@/view/common/StatusBar/StatusBar";
import {Content} from "@/view/common/Content/Content";


export default function Home() {
    return (
        <>
            <div className="flex">
                <SideBar/>
                <div className="w-full block">
                    <StatusBar/>
                    <Content/>
                </div>
            </div>

        </>
    );
}
