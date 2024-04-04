import React from "react";
import { Listbox, ListboxItem, Card } from "@nextui-org/react";
import { HomeIcon } from "@/Icons/HomeIcon";
import { FolderIcon } from "@/Icons/FolderIcon";
import { UsersIcon } from "@/Icons/UsersIcon";
import { IconWrapper } from "./IconWrapper";

const SidebarNav = () => {
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
        <Card
            shadow="none"
            className="flex-none w-56 self-stretch rounded pl-2 py-2"
        >
            <Listbox
                items={items}
                aria-label="User Menu"
                onAction={(key) => alert(key)}
                className="p-0 gap-4"
                itemClasses={{
                    base: "h-12 rounded-xl data-[hover=true]:bg-teal-400/40",
                }}
            >
                {(item) => (
                    <ListboxItem
                        key={item.key}
                        color={item.key === "delete" ? "danger" : "default"}
                        className="px-4 my-1"
                        startContent={item.icon}
                    >
                        {item.label}
                    </ListboxItem>
                )}
            </Listbox>
        </Card>
    );
};

export default SidebarNav;
