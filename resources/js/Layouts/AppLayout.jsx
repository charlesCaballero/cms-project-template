import React from "react";

import { usePage } from "@inertiajs/react";
import AppNavbar from "@/Components/AppNavbar";
import SidebarNav from "@/Components/SidebarNav";

const AppLayout = ({ children }) => {
    const navbarHeight = "4rem"; // this is the default navbar height in nextui
    const { url } = usePage();
    switch (url) {
        // if the url is in login, use LoginLayout
        case "/login":
            return <main>{children}</main>;

        case "/register":
            return <main>{children}</main>;

        // if the url is in login, don't Applayout
        default:
            return (
                <div className="min-h-screen">
                    <AppNavbar />

                    <div
                        className={`flex h-[calc(100vh-${navbarHeight})] gap-4 items-stretch`}
                    >
                        {/* Side Navbar */}

                        <SidebarNav />
                        <div className="flex-1 self-stretch">{children}</div>
                    </div>
                </div>
            );
    }
};

export default AppLayout;
