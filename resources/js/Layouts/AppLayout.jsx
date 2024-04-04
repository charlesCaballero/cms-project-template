import React from "react";

import { usePage } from "@inertiajs/react";
import AppNavbar from "@/Components/AppNavbar";
import SidebarNav from "@/Components/SidebarNav";
import useDarkMode from "use-dark-mode";

const AppLayout = ({ children }) => {
    // const navbarHeight = "4rem"; // this is the default navbar height in nextui
    const { url } = usePage();
    const darkMode = useDarkMode(false);
    switch (url) {
        // if the url is in login, use LoginLayout
        case "/login":
            return <main>{children}</main>;

        case "/register":
            return <main>{children}</main>;

        // if the url is in login, don't Applayout
        default:
            return (
                <main
                    className={`${
                        darkMode.value ? "dark" : ""
                    } text-foreground bg-background h-screen overflow-y-hidden`}
                >
                    <AppNavbar />

                    <div className={`flex h-[calc(100vh-4rem)] items-stretch`}>
                        {/* Side Navbar */}

                        <SidebarNav />
                        <div className="flex-1 self-stretch p-6">
                            {children}
                        </div>
                    </div>
                </main>
            );
    }
};

export default AppLayout;
