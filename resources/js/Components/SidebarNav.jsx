import React from "react";
import { Listbox, ListboxItem, Button } from "@nextui-org/react";
import { HomeIcon } from "@/Icons/HomeIcon";
import { FolderIcon } from "@/Icons/FolderIcon";
import { UsersIcon } from "@/Icons/UsersIcon";
import { usePage } from "@inertiajs/react";
import { ArrowLeftIcon } from "@/Icons/ArrowLeftIcon";

const SidebarNav = () => {
    const { component } = usePage();
    const [collapse, setCollapse] = React.useState(false);
    const items = [
        {
            key: "home",
            label: "Home",
            icon: <HomeIcon />,
            color: "bg-neutral-200 text-neutral-800",
        },
        {
            key: "reports",
            label: "Reports",
            icon: <FolderIcon />,
            color: "bg-neutral-200 text-neutral-800",
        },
        {
            key: "users",
            label: "Users",
            icon: <UsersIcon />,
            color: "bg-neutral-200 text-neutral-800 ",
        },
    ];

    return (
        <div
            className={`flex-none ${
                collapse ? "w-20" : "w-64"
            } self-stretch rounded-none p-2 border-r-1 border-slate-400/20`}
        >
            <div className="text-right my-3">
                <Button
                    size="md"
                    radius="lg"
                    color="primary"
                    isIconOnly
                    onClick={() => setCollapse(!collapse)}
                >
                    <ArrowLeftIcon />
                </Button>
            </div>
            <Listbox
                items={items}
                aria-label="User Menu"
                onAction={(key) => alert(key)}
                className="p-0 gap-4"
                itemClasses={{
                    base: "h-12 rounded-xl data-[hover=true]:bg-teal-400/40 dark:data-[hover=true]:bg-indigo-400/40",
                }}
            >
                {(item) => (
                    <ListboxItem
                        key={item.key}
                        color={item.key === "delete" ? "danger" : "default"}
                        className={`px-4 my-1 ${
                            component.startsWith(item.label) &&
                            "bg-teal-400/40 dark:bg-indigo-400/40"
                        }`}
                        startContent={item.icon}
                    >
                        {item.label}
                    </ListboxItem>
                )}
            </Listbox>
        </div>
    );
};

export default SidebarNav;
