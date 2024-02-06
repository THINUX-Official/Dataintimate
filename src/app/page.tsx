import Image from "next/image";
import {SideBar} from "@/view/common/SideBar/SideBar";
import 'tailwindcss/tailwind.css'
import {NavBar} from "@/view/common/NavBar/NavBar";


export default function Home() {
    return (
        <>
            <div>
                <NavBar/>
                <SideBar/>
            </div>
        </>
    );
}
