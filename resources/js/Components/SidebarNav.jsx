import { useState, useCallback, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { HomeIcon } from "@/Icons/SidebarIcons/HomeIcon";
import { FolderIcon } from "@/Icons/SidebarIcons/FolderIcon";
import { UsersIcon } from "@/Icons/SidebarIcons/UsersIcon";
import { ArrowRightIcon } from "@/Icons/ArrowRightIcon";
import SidebarMenu from "./SidebarMenu";

const items = [
    {
        key: "home",
        label: "Home",
        icon: (w, h) => <HomeIcon width={w} height={h} />,
        url: "/",
    },
    {
        key: "reports",
        label: "Reports",
        icon: (w, h) => <FolderIcon width={w} height={h} />,
        url: "/reports",
    },
    {
        key: "users",
        label: "Users",
        icon: (w, h) => <UsersIcon width={w} height={h} />,
        url: "/users",
    },
];

const SidebarNav = () => {
    const [sidebarView, setSidebarView] = useState(() => {
        return localStorage.getItem("sidebarview") || "show";
    });

    const toggleSidebarView = useCallback(() => {
        const newSidebarView = sidebarView === "show" ? "collapse" : "show";
        setSidebarView(newSidebarView);
        localStorage.setItem("sidebarview", newSidebarView);
    }, [sidebarView]);

    useEffect(() => {
        const savedSidebarView = localStorage.getItem("sidebarview");
        if (savedSidebarView) {
            setSidebarView(savedSidebarView);
        }
    }, []);

    return (
        <div
            className={`
                flex-none 
                ${sidebarView === "collapse" ? "w-20" : "w-64"} 
                self-stretch 
                rounded-none 
                p-2 
                border-r-1 
                border-slate-400/20
                transition-all 
                delay-150 
                duration-100 
                overflow-hidden
            `}
        >
            <div className="flex flex-col h-full">
                <div className="flex-grow">
                    <SidebarMenu items={items} sidebarView={sidebarView} />
                </div>
                <div className="text-right my-3">
                    <Button
                        size="md"
                        radius="lg"
                        color="primary"
                        isIconOnly
                        onClick={toggleSidebarView}
                    >
                        <ArrowRightIcon
                            className={`
                                ${sidebarView !== "collapse" && "-rotate-180"} 
                                transition-all 
                                transform
                            `}
                            width="20px"
                            height="20px"
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SidebarNav;
