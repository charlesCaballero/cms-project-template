import { Button, Tooltip } from "@nextui-org/react";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

const SidebarMenu = ({ items, sidebarView }) => {
    const { component } = usePage();

    return (
        <div className="flex flex-col gap-2 items-center w-full py-3">
            {items.map((item) => (
                <Tooltip
                    key={item.key}
                    isDisabled={sidebarView !== "collapse"}
                    showArrow={true}
                    content={item.label}
                    placement="right"
                    size="lg"
                    color="default"
                    radius="sm"
                >
                    {/* <Link
                        href={route(item.key)}
                        className="w-full"
                        only={[item.key]}
                    > */}
                    <Button
                        fullWidth
                        size="lg"
                        radius="lg"
                        variant={
                            component.startsWith(item.label) ? "flat" : "light"
                        }
                        color={"primary"}
                        startContent={item.icon("25px", "25px")}
                        isIconOnly={sidebarView === "collapse" ? true : false}
                        className={`${
                            sidebarView !== "collapse" && "justify-start w-auto"
                        } text-foreground gap-5 w-full transition-all delay-200 duration-300`}
                        disabled={component.startsWith(item.label)}
                        onClick={() => route(item.key)}
                    >
                        {
                            <p
                                className={`${
                                    sidebarView !== "collapse" &&
                                    "w-auto opacity-100"
                                } text-lg w-0 opacity-0 transition-opacity delay-300 duration-300 `}
                            >
                                {item.label}
                            </p>
                        }
                    </Button>
                    {/* </Link> */}
                </Tooltip>
            ))}
        </div>
    );
};

export default SidebarMenu;
