import React from "react";
import { usePage } from "@inertiajs/react";

const AppLayout = ({ children }) => {
    const { props, url } = usePage();
    switch (url) {
        // if the url is in login, use LoginLayout
        case "/login":
            return <main>{children}</main>;

        // if the url is in login, don't Applayout
        default:
            return (
                <main>
                    <div>Appbar</div>
                    <div>{children}</div>
                </main>
            );
    }
};

export default AppLayout;
