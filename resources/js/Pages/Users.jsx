import React from "react";
import { Button, Input } from "@nextui-org/react";
import { Head } from "@inertiajs/react";
import { SearchIcon } from "@/Icons/SearchIcon";
import DataTable from "@/Components/DataTable";

const Users = () => {
    return (
        <div>
            <Head title="Users" />
            <div className="flex justify-between items-center w-full mb-2">
                <h1 className="text-4xl">Manage Users</h1>
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
            {/* Table of users */}
            <DataTable />
        </div>
    );
};

export default Users;
