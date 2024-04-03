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
} from "@nextui-org/react";
import { LogoutIcon } from "@/Icons/LogoutIcon";
import { UserIdIcon } from "@/Icons/UserIdIcon";
import { CaretDownIcon } from "@/Icons/CaretDownIcon";
import BellIcon from "@/Icons/BellIcon";
import SunIcon from "@/Icons/SunIcon";
import { MoonIcon } from "@/Icons/MoonIcon";

const AppNavbar = () => {
    const { auth } = usePage().props;
    const { post } = useForm();

    const submit = (e) => {
        e.preventDefault();
        post(route("logout"));
    };

    return (
        <Navbar maxWidth="full">
            <NavbarBrand>
                {/* Change this section into your logo */}
                <Image
                    width={45}
                    alt="App logo"
                    src={asset("charles-logo.png")}
                />
                <div className="hidden sm:flex text-xl font-bold text-slate-800">
                    Argus
                    <span className="text-primary text-2xl font-black">X</span>
                    Codes
                </div>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Dropdown showArrow>
                        <DropdownTrigger>
                            <Button
                                disableAnimation
                                className="inline-flex items-center rounded-md bg-white"
                            >
                                <User
                                    name={auth?.user?.name}
                                    description={auth?.user?.email}
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
                            >
                                Profile
                            </DropdownItem>
                            <DropdownItem
                                key="notification"
                                // href={route("profile.edit")}
                                startContent={<BellIcon />}
                            >
                                Notifications
                            </DropdownItem>
                            <DropdownItem
                                key="Theme"
                                // href={route("profile.edit")}
                                startContent={<MoonIcon />}
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
