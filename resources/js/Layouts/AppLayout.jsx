import React from "react";

import { usePage } from "@inertiajs/react";
import AppNavbar from "@/Components/AppNavbar";

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

                    <main>{children}</main>
                </div>
            );
    }
};

export default AppLayout;
