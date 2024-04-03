import React from "react";

import { usePage } from "@inertiajs/react";
import AppNavbar from "@/Components/AppNavbar";
import SidebarNav from "@/Components/SidebarNav";
import { Card } from "@nextui-org/react";

const navbarHeight = "4rem"; // this is the default navbar height in nextui

const AppLayout = ({ children }) => {
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
                <div className="min-h-screen bg-gray-100">
                    <AppNavbar />

                    <main
                        className={`flex gap-4 min-h-[calc(100vh-${navbarHeight})] w-screen items-stretch p-6`}
                    >
                        {/* Side Navbar */}

                        <Card
                            shadow="none"
                            className="flex-none w-56 self-stretch"
                        >
                            <SidebarNav />
                        </Card>
                        <div className="flex-1 self-stretch">{children}</div>
                    </main>
                </div>
            );
    }
};

export default AppLayout;
