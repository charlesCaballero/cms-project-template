import React from "react";
import { UserIcon } from "@/Icons/UserIcon";
import { Link, usePage, useForm } from "@inertiajs/react";
import { asset } from "@/utils";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    User,
    Image,
    Button,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Navbar,
    Spacer,
} from "@nextui-org/react";
import { LogoutIcon } from "@/Icons/LogoutIcon";
import { UserIdIcon } from "@/Icons/UserIdIcon";
import { CaretDownIcon } from "@/Icons/CaretDownIcon";
import BellIcon from "@/Icons/BellIcon";
import SunIcon from "@/Icons/SunIcon";
import { MoonIcon } from "@/Icons/MoonIcon";
import { useTheme } from "@/ThemeProvider";

const AppNavbar = () => {
    const { props, url } = usePage();
    const { post } = useForm();

    const submit = (e) => {
        e.preventDefault();
        post(route("logout"), { replace: true });
    };

    const theme = useTheme().theme;
    const toggleTheme = useTheme().toggleTheme;

    return (
        <Navbar maxWidth="full" isBordered classNames={{ wrapper: "px-4" }}>
            <NavbarBrand>
                {/* Change this section into your logo */}
                <Image
                    width={45}
                    alt="App logo"
                    src={asset("charles-logo.png")}
                />
                <Spacer x="2" />
                <div className="hidden sm:flex text-xl font-bold ">
                    Argus
                    <span className="text-teal-500 dark:text-indigo-500 text-2xl font-black">
                        X
                    </span>
                    Codes
                </div>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Dropdown showArrow>
                        <DropdownTrigger>
                            <Button
                                disableAnimation
                                className="inline-flex items-center rounded-md bg-transparent"
                            >
                                <User
                                    name={props.auth?.user?.name}
                                    description={props.auth?.user?.email}
                                    avatarProps={{
                                        showFallback: true,
                                        fallback: <UserIcon />,
                                    }}
                                />
                                <CaretDownIcon />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem
                                key="profile"
                                href={route("profile.edit")}
                                startContent={<UserIdIcon />}
                                description="Update personal information and photo"
                            >
                                Profile
                            </DropdownItem>
                            <DropdownItem
                                key="notification"
                                // href={route("profile.edit")}
                                startContent={<BellIcon />}
                                description="Show reminders and updates"
                            >
                                Notifications
                            </DropdownItem>
                            <DropdownItem
                                key="Theme"
                                // href={route("profile.edit")}
                                startContent={
                                    theme === "light" ? (
                                        <SunIcon />
                                    ) : (
                                        <MoonIcon />
                                    )
                                    // <SunIcon />
                                }
                                description={
                                    theme === "dark"
                                        ? "Change to light mode"
                                        : "Change to dark mode"
                                }
                                onClick={() => toggleTheme()}
                                showDivider
                            >
                                Theme
                            </DropdownItem>
                            <DropdownItem
                                key="logout"
                                onClick={(e) => submit(e)}
                                startContent={<LogoutIcon />}
                            >
                                Log out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default AppNavbar;
