import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";

const SidebarNav = () => {
    const items = [
        {
            key: "new",
            label: "New file",
        },
        {
            key: "copy",
            label: "Copy link",
        },
        {
            key: "edit",
            label: "Edit file",
        },
        {
            key: "delete",
            label: "Delete file",
        },
    ];
    return (
        <Listbox
            items={items}
            aria-label="Dynamic Actions"
            onAction={(key) => alert(key)}
        >
            {(item) => (
                <ListboxItem
                    key={item.key}
                    color={item.key === "delete" ? "danger" : "default"}
                    className={item.key === "delete" ? "text-danger" : ""}
                >
                    {item.label}
                </ListboxItem>
            )}
        </Listbox>
    );
};

export default SidebarNav;
