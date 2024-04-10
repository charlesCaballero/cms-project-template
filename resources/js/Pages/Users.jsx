import React from "react";
import { Card, CardBody, Button, Input } from "@nextui-org/react";
import { Head, usePage } from "@inertiajs/react";
import { PinIcon } from "@/Icons/PinIcon";
import { UserCheckIcon } from "@/Icons/UserPageIcons/UserCheckIcon";
import { SearchIcon } from "@/Icons/SearchIcon";
import { UserSpeakIcon } from "@/Icons/UserPageIcons/UserSpeakIcon";
import { UserBlockIcon } from "@/Icons/UserPageIcons/UserBlockIcon";

const Users = () => {
    const url = usePage().url;
    const crumbs = url.split("/");

    return (
        <div>
            <Head title="Users" />
            <div className="flex justify-between items-center w-full mb-2">
                <h1 className="text-4xl">Users</h1>
                <div className="flex gap-4">
                    <Input
                        id="user-search"
                        name="user-search"
                        variant="bordered"
                        placeholder="Search user"
                        endContent={<SearchIcon />}
                        className="w-60"
                        classNames={{
                            inputWrapper: "dark:border-white/50",
                        }}
                    />
                    <Button color="primary">Add new user</Button>
                </div>
            </div>
            <div className="flex gap-2 items-center py-3">
                <PinIcon />
                <h2>Overview</h2>
            </div>
            <div className="flex flex-row justify-between w-full gap-4">
                <Card shadow="sm" className="flex-1">
                    <CardBody className="p-8 flex flex-col">
                        <div className="flex">
                            <p className="flex-grow text-xl font-bold">
                                Total Users
                            </p>
                            <div className="p-2 bg-secondary/60 rounded-full">
                                <UserCheckIcon />
                            </div>
                        </div>
                        <div className="flex-grow">
                            <p className="text-5xl font-bold text-secondary">
                                20
                            </p>
                            <p className="text-xs max-w-80">
                                registered users including inactive users.
                            </p>
                        </div>
                        <div className="pt-6">
                            <Button color="primary" variant="ghost">
                                View all users
                            </Button>
                        </div>
                    </CardBody>
                </Card>
                <Card shadow="sm" className="flex-1">
                    <CardBody className="p-8 flex flex-col">
                        <div className="flex">
                            <p className="flex-grow text-xl font-bold">
                                Active Users
                            </p>
                            <div className="p-2 bg-success-200/80 rounded-full">
                                <UserSpeakIcon />
                            </div>
                        </div>
                        <div className="flex-grow">
                            <p className="text-5xl font-bold text-success-600">
                                12
                            </p>
                            <p className="text-xs">
                                users actively using the system this month.
                            </p>
                        </div>
                        <div className="pt-6">
                            <Button color="primary" variant="ghost">
                                See latest user activity
                            </Button>
                        </div>
                    </CardBody>
                </Card>
                <Card shadow="sm" className="flex-1">
                    <CardBody className="p-8 flex flex-col">
                        <div className="flex">
                            <p className="flex-grow text-xl font-bold">
                                Inactive Users
                            </p>
                            <div className="p-2 bg-danger-200/80 rounded-full">
                                <UserBlockIcon />
                            </div>
                        </div>
                        <div className="flex-grow">
                            <p className="text-5xl font-bold text-danger">20</p>
                            <p className="text-xs ">
                                pending accounts, and accounts with problems.
                            </p>
                        </div>
                        <div className="pt-6">
                            <Button color="primary" variant="ghost">
                                See all details
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default Users;
