import { useState, useCallback, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { HomeIcon } from "@/Icons/HomeIcon";
import { FolderIcon } from "@/Icons/FolderIcon";
import { UsersIcon } from "@/Icons/UsersIcon";
import { ArrowRightIcon } from "@/Icons/ArrowRightIcon";
import SidebarMenu from "./SidebarMenu";

const items = [
    {
        key: "home",
        label: "Home",
        icon: (w, h) => <HomeIcon width={w} height={h} />,
        color: "bg-neutral-200 text-neutral-800",
    },
    {
        key: "reports",
        label: "Reports",
        icon: (w, h) => <FolderIcon width={w} height={h} />,
        // icon: <FolderIcon />,
        color: "bg-neutral-200 text-neutral-800",
    },
    {
        key: "users",
        label: "Users",
        icon: (w, h) => <UsersIcon width={w} height={h} />,
        // icon: <UsersIcon />,
        color: "bg-neutral-200 text-neutral-800 ",
    },
];

const SidebarNav = () => {
    const [sidebarView, setSidebarView] = useState(() => {
        const initialState = localStorage.getItem("sidebarview");
        return initialState ? initialState : "show";
    });

    const getSidebarViewFromLocalStorage = () => {
        const savedState = localStorage.getItem("sidebarview");
        if (savedState) {
            console.log("savedState:" + savedState);
            setSidebarView(savedState);
        }
    };

    const toggleSidebarView = useCallback(() => {
        setSidebarView((prevTheme) => {
            const newState = prevTheme === "show" ? "collapse" : "show";
            localStorage.setItem("sidebarview", newState);
            return newState;
        });
    }, [sidebarView]);

    useEffect(() => {
        getSidebarViewFromLocalStorage();
    }, [sidebarView]);

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
                transition-all delay-150 duration-300 overflow-hidden
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
                        onClick={() => toggleSidebarView()}
                    >
                        {
                            <ArrowRightIcon
                                className={`
                                    ${
                                        sidebarView !== "collapse" &&
                                        "-rotate-180"
                                    } 
                                    transition-all 
                                    transform
                                    `}
                                width="20px"
                                height="20px"
                            />
                        }
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SidebarNav;
