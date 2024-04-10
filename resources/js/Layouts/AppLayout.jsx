import React from "react";

import { usePage } from "@inertiajs/react";
import AppNavbar from "@/Components/AppNavbar";
import SidebarNav from "@/Components/SidebarNav";
import { useTheme } from "@/ThemeProvider";

const AppLayout = ({ children }) => {
    const { component } = usePage();
    const theme = useTheme().theme;

    switch (component.startsWith("Auth/")) {
        // if the component is in login, use LoginLayout
        case true:
            return <main>{children}</main>;

        default:
            return (
                <main
                    className={`${theme} text-foreground bg-background h-screen overflow-y-hidden`}
                >
                    <AppNavbar />
                    <div className={`flex h-[calc(100vh-4rem)] items-stretch`}>
                        {/* Side Navbar */}
                        <SidebarNav />
                        <div className="flex-1 self-stretch p-10 bg-slate-300/10">
                            {children}
                        </div>
                    </div>
                </main>
            );
    }
};

export default AppLayout;
